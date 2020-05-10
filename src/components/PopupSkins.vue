<template>
  <div>
    <div
      ref="container"
      id="popper-skins-container"
      v-on-clickaway="clickAwayPopper"
    >
      <div id="skins-arrow" data-popper-arrow />
      <div id="popper-inner">
        <div class="emoji-popover-inner">
          <div v-if="emojiList.length !== 0">
            <p class="emoji-list">
              <span
                v-for="emoji in emojiList"
                :key="emoji.unicode"
                v-html="emoji.img"
                @click="clickEmoji(emoji)"
              ></span>
            </p>
          </div>
        </div>
      </div>
    </div>
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

#popper-skins-container {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 0;
  background: #f7f7f7;
  border: none;
  border-radius: 3px;
  animation: fadein 300ms;
  z-index: 1;
  display: none;

  &[data-show] {
    display: block;
  }
}

#skins-arrow {
  position: absolute;
  z-index: -1;

  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    transform: rotate(45deg);
    background: #f0f0f0;
    width: 24px;
    height: 24px;
  }
}

#popper-skins-container[data-popper-placement^='top'] > #skins-arrow {
  bottom: 12px;
  padding-right: 20px;
  left: -10px;
}

#popper-skins-container[data-popper-placement^='bottom'] > #skins-arrow {
  top: -12px;
  padding-right: 32px;
}

#popper-skins-container[data-popper-placement^='left'] > #skins-arrow {
  right: 12px;
  padding-bottom: 32px;
}

#popper-skins-container[data-popper-placement^='right'] > #skins-arrow {
  left: -12px;
  padding-bottom: 32px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import {
  popperGenerator,
  defaultModifiers,
} from '@popperjs/core/lib/popper-lite';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import VueClickaway from 'vue-clickaway';
import EmojiSkin from '../interfaces/EmojiSkin';

export default Vue.extend({
  mixins: [VueClickaway.mixin],
  name: 'PopupSkins',
  data() {
    return {
      // eslint-disable-next-line
      containerRef: null as HTMLElement | null,
      buttonRef: null as HTMLElement | null,
      popperOpen: false as boolean,
      debouncedPopperOpen: false as boolean,
      popperInstance: null as any | null,
      holdingInterval: null as any,
      closeOnClickaway: true as boolean,
    };
  },
  props: {
    disabled: {
      default: false,
      type: Boolean as () => boolean,
    },
    offset: {
      default: () => [0, 30],
      type: Array as () => Array<number>,
    },
    emojiList: {
      required: true,
      type: Array as () => Array<EmojiSkin>,
    },
    clickEmoji: {
      required: true,
      type: Function as () => Function,
    },
  },
  computed: {
    createPopper() {
      const defaultModifiersObj = [
        ...defaultModifiers,
        offset,
        preventOverflow,
        arrow,
      ];

      return popperGenerator({
        defaultModifiers: defaultModifiersObj,
      });
    },
  },
  mounted(): void {
    this.containerRef = this.$refs.container;
  },
  watch: {
    popperOpen: function (val): void {
      this.$emit('popperOpenChanged', val);
      setTimeout(() => {
        this.debouncedPopperOpen = val;
      }, 300);
    },
    closeOnClickaway: function (val): void {
      this.$emit('closeOnClickaway', val);
    },
  },
  methods: {
    clickAwayPopper(): void {
      if (this.disable || !this.closeOnClickaway) return;
      const ctxPopperInstance = this.popperInstance;

      if (this.debouncedPopperOpen) {
        this.$refs.container.removeAttribute('data-show');
        this.popperOpen = false;
        setTimeout(ctxPopperInstance.forceUpdate, 1);
      }
    },
    instantiatePopper(refClickable: string): void {
      const domElClickableRef = document.getElementById(refClickable);
      this.popperInstance = this.createPopper(
        domElClickableRef,
        this.$refs.container,
        {
          placement: 'top',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: this.offset,
              },
            },
            {
              name: 'arrow',
              options: {
                element: '#skins-arrow',
              },
            },
          ],
        }
      );
      this.$refs.container.setAttribute('data-show', true);
      this.popperOpen = true;
      const ctxPopperInstance = this.popperInstance;
      setTimeout(ctxPopperInstance.forceUpdate, 1);
    },
    closePopper(): void {
      this.$refs.container.removeAttribute('data-show');
      this.popperOpen = false;
      const ctxPopperInstance = this.popperInstance;
      if (ctxPopperInstance) setTimeout(ctxPopperInstance.forceUpdate, 1);
    },
    setCloseOnClickaway(bool: boolean): void {
      this.closeOnClickaway = bool;
    },
  },
});
</script>
