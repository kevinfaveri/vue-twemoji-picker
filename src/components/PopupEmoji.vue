<template>
  <div>
    <div
      ref="container"
      id="popper-container"
      v-on-clickaway="clickAwayPopper"
      @mouseleave="hoverTriggerPopper"
    >
      <div
        :id="this.arrowEnabled ? 'arrow' : 'arrow-disabled'"
        data-popper-arrow
      />
      <div id="popper-inner">
        <slot name="container" v-if="containerRef" />
      </div>
    </div>
    <span
      ref="button"
      id="popper-button"
      @click="clickTriggerPopper"
      @mouseenter="hoverTriggerPopper"
    >
      <slot name="button" v-if="buttonRef" />
    </span>
  </div>
</template>

<style lang="stylus">
/* *Animation */
@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#popper-container {
  padding: 0;
  background: #ebebeb;
  border: none;
  border-radius: 3px;
  animation: fadein 300ms;
  z-index: 1;
  display: none;

  &[data-show] {
    display: block;
  }
}

#arrow {
  position: absolute;
  z-index: -1;

  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    transform: rotate(45deg);
    background: #ebebeb;
    width: 24px;
    height: 24px;
  }
}

#popper-container[data-popper-placement^='top'] > #arrow {
  bottom: 12px;
  padding-right: 32px;
}

#popper-container[data-popper-placement^='bottom'] > #arrow {
  top: -12px;
  padding-right: 32px;
}

#popper-container[data-popper-placement^='left'] > #arrow {
  right: 12px;
  padding-bottom: 32px;
}

#popper-container[data-popper-placement^='right'] > #arrow {
  left: -12px;
  padding-bottom: 32px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import {
  popperGenerator,
  defaultModifiers
} from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';

import VueClickaway from 'vue-clickaway';

export default Vue.extend({
  mixins: [VueClickaway.mixin],
  name: 'PopupEmoji',
  data() {
    return {
      // eslint-disable-next-line
      containerRef: null as HTMLElement | null,
      buttonRef: null as HTMLElement | null,
      popperOpen: false as boolean,
      debouncedPopperOpen: false as boolean,
      popperInstance: null as any | null
    };
  },
  props: {
    disabled: {
      default: false,
      type: Boolean as () => boolean
    },
    placement: {
      default: 'top-start',
      type: String as () => string
    },
    autoflip: {
      default: false,
      type: Boolean as () => boolean
    },
    offset: {
      default: () => [0, 30],
      type: Array as () => Array<number>
    },
    arrowEnabled: {
      default: false,
      type: Boolean as () => boolean
    },
    triggerType: {
      default: 'click',
      type: String as () => string,
      validator: function(value) {
        if (value !== 'click' && value !== 'hover') {
          console.error(
            'The value entered for the prop "triggerType" is invalid. ' +
              'Valid values: "click" and "hover".'
          );
        }
        return true;
      }
    },
    closeOnClickaway: {
      default: true,
      type: Boolean as () => boolean
    }
  },
  mounted(): void {
    const defaultModifiersObj = [...defaultModifiers, offset, preventOverflow];
    if (this.autoflip) defaultModifiersObj.push(flip);
    if (this.arrowEnabled) defaultModifiersObj.push(arrow);

    const createPopper = popperGenerator({
      defaultModifiers: defaultModifiersObj
    });

    this.containerRef = this.$refs.container;
    this.buttonRef = this.$refs.button;

    this.popperInstance = createPopper(this.buttonRef, this.containerRef, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: this.offset
          }
        },
        {
          name: 'arrow',
          options: {
            element: '#arrow'
          }
        }
      ]
    });
  },
  watch: {
    popperOpen: function(val): void {
      this.$emit('popperOpenChanged', val);
      setTimeout(() => {
        this.debouncedPopperOpen = val;
      }, 300);
    }
  },
  methods: {
    clickTriggerPopper(): void {
      if (this.disabled || this.triggerType !== 'click') return;
      const ctxPopperInstance = this.popperInstance;

      if (this.$refs.container.hasAttribute('data-show')) {
        this.$refs.container.removeAttribute('data-show');
        this.popperOpen = false;
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      } else {
        this.popperOpen = true;
        this.$refs.container.setAttribute('data-show', '');
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      }
    },
    clickAwayPopper(): void {
      if (this.disabled || !this.closeOnClickaway) return;
      const ctxPopperInstance = this.popperInstance;

      if (this.debouncedPopperOpen) {
        this.$refs.container.removeAttribute('data-show');
        this.popperOpen = false;
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      }
    },
    hoverTriggerPopper(): void {
      if (this.disabled || this.triggerType !== 'hover') return;
      const ctxPopperInstance = this.popperInstance;

      if (this.$refs.container.hasAttribute('data-show')) {
        this.$refs.container.removeAttribute('data-show');
        this.popperOpen = false;
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      } else {
        this.popperOpen = true;
        this.$refs.container.setAttribute('data-show', '');
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      }
    }
  }
});
</script>
