<template>
  <div>
    <div
      ref="container"
      id="popper-container"
      v-on-clickaway="clickAwayPopper"
      @mouseleave="hoverTriggerPopper"
    >
      <div id="popper-inner">
        <div id="arrow" data-popper-arrow v-if="arrowEnabled" />
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

<style>
/**Animation */
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
  background: #fafafa;
  border: 3px #fafafa solid;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  animation: fadein 300ms;
  z-index: 1;
}

#popper-container {
  display: none;
}

#popper-container[data-show] {
  display: block;
}

#popper-container > #popper-inner > #arrow {
  position: inherit !important;
  background: #fafafa;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

#popper-container[data-popper-placement^='top'] > #popper-inner > #arrow {
  transform: none !important;
}

#popper-container[data-popper-placement^='top']
  > #popper-inner
  > #arrow::before,
#popper-container[data-popper-placement^='top']
  > #popper-inner
  > #arrow::after {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

#popper-container[data-popper-placement^='top']
  > #popper-inner
  > #arrow:before {
  border-color: rgba(194, 225, 245, 0);
  border-top-color: #fafafa;
  border-width: 16px;
  margin-left: -16px;
}

#popper-container[data-popper-placement^='top'] > #popper-inner > #arrow:after {
  border-color: rgba(136, 183, 213, 0);
  border-top-color: #fafafa;
  border-width: 15px;
  margin-left: -15px;
}

#popper-container[data-popper-placement^='bottom'] > #popper-inner > #arrow {
  transform: none !important;
}

#popper-container[data-popper-placement^='bottom']
  > #popper-inner
  > #arrow::before,
#popper-container[data-popper-placement^='bottom']
  > #popper-inner
  > #arrow::after {
  bottom: 100%;
  left: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

#popper-container[data-popper-placement^='bottom']
  > #popper-inner
  > #arrow:before {
  border-color: rgba(194, 225, 245, 0);
  border-bottom-color: #fafafa;
  border-width: 16px;
  margin-left: -16px;
}

#popper-container[data-popper-placement^='bottom']
  > #popper-inner
  > #arrow:after {
  border-color: rgba(136, 183, 213, 0);
  border-bottom-color: #fafafa;
  border-width: 15px;
  margin-left: -15px;
}

#popper-container[data-popper-placement^='left']
  > #popper-inner
  > #arrow::before,
#popper-container[data-popper-placement^='left']
  > #popper-inner
  > #arrow::after {
  left: 100%;
  top: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

#popper-container[data-popper-placement^='left']
  > #popper-inner
  > #arrow:before {
  border-color: rgba(194, 225, 245, 0);
  border-left-color: #fafafa;
  border-width: 16px;
  margin-top: -16px;
}

#popper-container[data-popper-placement^='left']
  > #popper-inner
  > #arrow:after {
  border-color: rgba(136, 183, 213, 0);
  border-left-color: #fafafa;
  border-width: 15px;
  margin-top: -15px;
}

#popper-container[data-popper-placement^='right']
  > #popper-inner
  > #arrow::before,
#popper-container[data-popper-placement^='right']
  > #popper-inner
  > #arrow::after {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

#popper-container[data-popper-placement^='right']
  > #popper-inner
  > #arrow:before {
  border-color: rgba(194, 225, 245, 0);
  border-right-color: #fafafa;
  border-width: 16px;
  margin-top: -16px;
}

#popper-container[data-popper-placement^='right']
  > #popper-inner
  > #arrow:after {
  border-color: rgba(136, 183, 213, 0);
  border-right-color: #fafafa;
  border-width: 15px;
  margin-top: -15px;
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
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';

import { mixin as clickaway } from 'vue-clickaway';

export default Vue.extend({
  mixins: [clickaway],
  name: 'PopperV2',
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
      default: 'top',
      type: String as () => string
    },
    offset: {
      default: [0, -12],
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
    }
  },
  mounted(): void {
    const createPopper = popperGenerator({
      defaultModifiers: [...defaultModifiers, offset, flip, preventOverflow]
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
        }
      ]
    });
  },
  watch: {
    popperOpen: function(val): void {
      setTimeout(() => {
        this.debouncedPopperOpen = val;
      }, 300);
    }
  },
  methods: {
    clickTriggerPopper(): void {
      if (this.disabled || this.triggerType !== 'click') return;
      const ctxPopperInstance = this.popperInstance;

      if (this.containerRef.hasAttribute('data-show')) {
        this.containerRef.removeAttribute('data-show');
        this.popperOpen = false;
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      } else {
        this.popperOpen = true;
        this.containerRef.setAttribute('data-show', '');
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      }
    },
    clickAwayPopper(): void {
      if (this.disabled) return;
      const ctxPopperInstance = this.popperInstance;

      if (this.debouncedPopperOpen) {
        this.containerRef.removeAttribute('data-show');
        this.popperOpen = false;
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      }
    },
    hoverTriggerPopper(): void {
      if (this.disabled || this.triggerType !== 'hover') return;
      const ctxPopperInstance = this.popperInstance;

      if (this.containerRef.hasAttribute('data-show')) {
        this.containerRef.removeAttribute('data-show');
        this.popperOpen = false;
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      } else {
        this.popperOpen = true;
        this.containerRef.setAttribute('data-show', '');
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      }
    }
  }
});
</script>
