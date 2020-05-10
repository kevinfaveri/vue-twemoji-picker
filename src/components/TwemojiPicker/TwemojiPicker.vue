<template>
  <div>
    <popup-emoji
      v-if="emojiData && emojiData.length > 0"
      :disabled="emojiPickerDisabled"
      :triggerType="triggerType"
      :placement="pickerPlacement"
      :autoflip="pickerAutoflip"
      :arrowEnabled="pickerArrowEnabled"
      :closeOnClickaway="pickerCloseOnClickaway"
      :extraPaddingOffset="pickerPaddingOffset"
      @popperOpenChanged="popperOpenChanged"
      ref="popupEmoji"
    >
      <template v-slot:container>
        <div id="emoji-container">
          <div
            id="emoji-popup"
            :style="{ width: calculatedPickerWidth + 'px' }"
          >
            <div id="emoji-popover-search" v-if="searchEmojisFeat">
              <div
                id="search-header"
                :class="{ 'is-focused': isSearchFocused }"
              >
                <span v-html="getEmojiImgFromUnicode('🔍')"></span>
                <input
                  @input="searchEmojiByTerm"
                  :placeholder="searchEmojiPlaceholder"
                  v-model="searchTerm"
                  @focus="isSearchFocused = true"
                  @blur="isSearchFocused = false"
                />
              </div>
            </div>

            <div id="emoji-popover-header" class="scroll-min">
              <span
                v-if="recentEmojisFeat && recentEmojis.length !== 0"
                v-html="getEmojiImgFromUnicode('🕒')"
                class="emoji-tab"
                @click="changeEmojiListActive(-1)"
                :class="{ active: emojiGroupActive === -1 }"
              ></span>
              <span
                v-for="(emojiGroup, index) in emojiPack"
                :key="emojiGroup.group"
                :id="emojiGroup.group"
                v-html="getEmojiGroupDescription(emojiGroup.group)"
                class="emoji-tab"
                @click="changeEmojiListActive(index)"
                :class="{ active: emojiGroupActive === index }"
              ></span>
            </div>

            <div
              class="emoji-popover-inner"
              :style="{
                width: calculatedPickerWidth + 'px',
                height: pickerHeight + 'px',
              }"
              @scroll.passive="onScrollEmojiList"
            >
              <div v-if="isSearchingEmoji">
                <strong
                  :style="{
                    padding: '3px',
                  }"
                  id="loading-label"
                  >{{ isLoadingLabel }}</strong
                >
              </div>

              <div
                v-if="
                  searchTerm.length !== 0 &&
                  searchEmojis.length === 0 &&
                  isSearchingEmoji === false
                "
              >
                <strong
                  :style="{
                    padding: '3px',
                  }"
                  >{{ searchEmojiNotFound }}</strong
                >
              </div>

              <div
                v-if="
                  emojiListActive.length !== 0 && isSearchingEmoji === false
                "
              >
                <p class="emoji-list">
                  <span
                    v-for="emoji in emojiListActive"
                    :key="emoji.unicode"
                    v-html="emoji.img"
                    @click="clickEmoji(emoji)"
                    @mousedown="startClickingSkinInterval(emoji)"
                    @mouseleave="stopClickingSkinInterval"
                    @mouseup="stopClickingSkinInterval"
                    @touchstart="startClickingSkinInterval(emoji)"
                    @touchend="stopClickingSkinInterval"
                    @touchcancel="stopClickingSkinInterval"
                    :id="`twemoji-picker-click-emoji-${emoji.unicode}`"
                  ></span>
                </p>
              </div>
            </div>

            <popup-skins
              :emojiList="skinsListActive"
              :closeOnClickaway="popupSkinsClickaway"
              :clickEmoji="clickEmoji"
              ref="popupSkins"
            />
          </div>
        </div>
      </template>
      <template v-slot:button>
        <slot name="twemoji-picker-button">
          <button
            @mouseenter="onMouseEnterEmojiBtn()"
            @mouseleave="onMouseLeaveEmojiBtn()"
            :disabled="emojiPickerDisabled"
            id="btn-emoji-default"
          >
            <div
              v-show="showEmoji"
              v-html="randomEmojiImg"
              class="fade-in"
            ></div>
            <div v-show="!showEmoji" id="dummy-el"></div>
          </button>
        </slot>
      </template>
    </popup-emoji>
    <span id="dummy-clickable-skin" />
  </div>
</template>
<style lang="stylus">
#emoji-container {
  z-index: 1;

  > #emoji-popup {
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    padding: 3px;

    img.emoji {
      height: 32px;
      width: 32px;
      vertical-align: -0.5rem;
    }

    > #emoji-popover-header {
      padding: 15px 5px;
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f2f2f2;
      }

      &::-webkit-scrollbar{
        height: 12px;
        background-color: #f2f2f2;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #c1c1c1;
      }

      > .emoji-tab {
        margin: 3px;
        padding: 5px;
        padding: 8px 5px;
        cursor: pointer;
        border-radius: 2px;
        opacity: 0.5;
        filter: grayscale(1);

        &:hover {
          border-bottom: 5px solid #b3b3b3;
          opacity: 1;
          filter: grayscale(0);
        }

        &.active {
          border-bottom: 5px solid #b3b3b3;
          opacity: 1;
          filter: grayscale(0);
        }
      }
    }

    .emoji-popover-inner {
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #f7f7f7;

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f2f2f2;
      }

      &::-webkit-scrollbar{
        width: 12px;
        background-color: #f2f2f2;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #c1c1c1;
      }

      #loading-label {
        margin: 0 5px;
      }

      > div > .emoji-list {
        padding: 10px;
        margin: 0px;
        text-align: justify;

        > span {
          font-size: 15px;
          cursor: pointer;
          border-radius: 15px;

          &:hover {
            background-color: #cacaca;
          }

          > img {
            margin: 5px;
          }
        }
      }
    }

    #emoji-popover-search {
      background-color: #f7f7f7;
      border-radius: 3px;
      margin: 5px 0;

      > #search-header {
        padding-top: 5px 0;
        display: flex;
        border: 1px solid #e6e6e6;
        border-radius: 25px;

        &.is-focused {
          background-color: #fcfcfc;
          transition: background-color 300ms ease-in-out;
          > span {
            filter: grayscale(0);
            transition: filter 300ms ease-in-out;
          }
        }

        > span {
          > img {
            width: 24px;
            height: 24px;
          }
          flex-grow: 1;
          padding: 5px 10px;
          width: 32px !important;
          text-align: center;
          filter: grayscale(1);
        }

        > input {
          flex-grow: 99;
          padding: 10px 5px;
          margin: 0 10px;
          border: none;
          font-size: 1rem;
          background-color: inherit;
          outline: none;
        }
      }
    }
  }
}

/* Popper Emoji */
#btn-emoji-default {
  flex-grow: 100;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 45px;
  margin: 10px;
  background-color: transparent;

  > div > img.emoji {
    height: 32px;
    width: 32px;
  }

  > #dummy-el {
    height: 32px;
    width: 32px;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
}

/* * Cursor */
.clickable {
  cursor: pointer;
}

/* * Transition - Fade */
.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0.4;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}
</style>
<script lang="ts">
import Vue from 'vue';
import EmojiService from '../../services/EmojiService';
import PopupEmoji from '../PopupEmoji.vue';
import PopupSkins from '../PopupSkins.vue';
import EmojiPack from '../../interfaces/EmojiPack';
import Emoji from '../../interfaces/Emoji';
import TwemojiOptions from '../../interfaces/TwemojiOptions';
import EmojiGroup from '../../interfaces/EmojiGroup';

import Props, { DEFAULT_PICKER_WIDTH } from './props';
import PropWatchers from './prop-watchers';
import EmojiSkin from '../../interfaces/EmojiSkin';

export default Vue.extend({
  name: 'TwemojiPicker',

  components: {
    'popup-emoji': PopupEmoji,
    'popup-skins': PopupSkins,
  },

  props: {
    ...Props,
  },

  data() {
    return {
      clickingSkinInterval: false as any,
      isClickingEmojiMouseDown: false as boolean,
      popupSkinsClickaway: true as boolean,

      showEmoji: false as boolean,
      showSkinsSelector: false as boolean,
      skinsListActive: [] as Array<EmojiSkin>,

      emojiPack: [] as Array<EmojiPack>,
      emojiListActive: [] as Array<Emoji>,
      emojiGroupActive: 0 as number,

      randomEmoji: null as string | null,

      isPointerOnEmojiBtn: false as boolean,
      twemojiOptions: {} as TwemojiOptions,

      recentEmojis: [] as Array<Emoji>,

      searchTerm: '' as string,
      searchEmojis: [] as Array<Emoji>,
      searchTimeout: null as any,
      isSearchingEmoji: false as boolean,
      isSearchFocused: false as boolean,
      calculatedPickerWidth: null as number | null,
      isPickerOpen: false as boolean,
    };
  },

  mounted() {
    this.setPickerWidth();
    this.$nextTick(() => {
      window.addEventListener('resize', this.setPickerWidth);
    });
  },

  computed: {
    randomEmojiImg(): string {
      this.triggerShowEmoji();
      return EmojiService.getEmojiImgFromUnicode(
        this.randomEmoji,
        this.twemojiOptions
      );
    },
  },

  created(): void {
    // Init TwemojiPicker watchers
    PropWatchers(this, this);

    this.twemojiOptions = {
      base: this.twemojiPath,
      ext: this.twemojiExtension,
      size: this.twemojiFolder,
    };
    if (this.recentEmojisFeat) {
      this.setRecentEmojis();
    }
    this.buildEmojiPack();
    this.emojiListActive = this.emojiPack[0].emojiList;
    this.setRandomEmoji();
  },
  watch: {
    // Data Watchers
    isPickerOpen(value) {
      if (value !== this.$refs.popupEmoji.popperOpen) {
        this.$refs.popupEmoji.popperOpen = value;
        setTimeout(() => this.$refs.popupEmoji.popperInstance.forceUpdate(), 1);
      }
    },
    randomEmoji() {
      // eslint-disable-next-line
      const vueContext = this;

      setTimeout(() => {
        if (vueContext.$refs.popupEmoji)
          vueContext.$refs.popupEmoji.popperInstance.forceUpdate();
      }, 100);
    },
  },

  methods: {
    triggerShowEmoji(): void {
      this.showEmoji = false;
      setTimeout(() => (this.showEmoji = true));
    },
    buildEmojiPack(): void {
      this.emojiPack = EmojiService.getEmojiImgArrayFromEmojiPack(
        this.emojiData,
        this.twemojiOptions
      );
    },
    onMouseEnterEmojiBtn(): void {
      if (this.isPointerOnEmojiBtn === false) {
        this.isPointerOnEmojiBtn = true;
        this.setRandomEmoji();
      }
    },
    onMouseLeaveEmojiBtn(): void {
      if (this.isPointerOnEmojiBtn === true) {
        this.isPointerOnEmojiBtn = false;
      }
    },
    setRandomEmoji(): void {
      this.randomEmoji = this.randomEmojiArray[
        Math.floor(Math.random() * this.randomEmojiArray.length)
      ];
    },

    clickEmoji(emoji: Emoji): void {
      this.$refs.popupSkins.setCloseOnClickaway(false);
      let emojiUnicode: string;
      // eslint-disable-next-line
      const vueContext = this;
      setTimeout(
        () => vueContext.$refs.popupSkins.setCloseOnClickaway(true),
        1
      );

      if (
        (this.isClickingEmojiMouseDown || this.$refs.popupSkins.popperOpen) &&
        emoji.skins?.length > 0 &&
        this.skinsSelection
      ) {
        return;
      } else {
        this.$refs.popupSkins.closePopper();
        emojiUnicode = emoji.unicode;
      }

      if (this.recentEmojisFeat) {
        this.addEmojiToRecentEmojis(emojiUnicode);
      }

      this.$emit('addTextBlur', emojiUnicode);
      this.$emit('emojiUnicodeAdded', emojiUnicode);
      this.$emit(
        'emojiImgAdded',
        EmojiService.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions)
      );
    },

    startClickingSkinInterval(emoji: Emoji): void {
      this.$refs.popupSkins.closePopper();
      this.isClickingEmojiMouseDown = false;
      if (emoji.skins?.length > 0 && this.skinsSelection) {
        if (!this.clickingSkinInterval) {
          this.clickingSkinInterval = setInterval(() => {
            this.skinsListActive = Array.from(emoji.skins);
            this.skinsListActive.unshift({
              unicode: emoji.unicode,
              img: emoji.img,
            });
            this.$refs.popupSkins.instantiatePopper(
              `twemoji-picker-click-emoji-${emoji.unicode}`
            );
          }, 500);
        }
      }
    },

    stopClickingSkinInterval(): void {
      this.isClickingEmojiMouseDown = false;
      clearInterval(this.clickingSkinInterval);
      this.clickingSkinInterval = false;
    },

    getEmojiGroupDescription(emojiGroup: number): string {
      const emojiGroupFound = this.emojiGroups.find(
        (x: EmojiGroup) => x.group === emojiGroup
      );
      if (emojiGroupFound) {
        return EmojiService.getEmojiImgFromUnicode(
          emojiGroupFound.description,
          this.twemojiOptions
        );
      }
      return 'Group ' + emojiGroup;
    },

    changeEmojiListActive(index: number): void {
      this.showSkinsSelector = false;
      this.searchTerm = '';
      this.emojiGroupActive = index;
      if (index >= 0) {
        this.emojiListActive = this.emojiPack[index].emojiList;
      } else if (index === -1) {
        this.emojiListActive = this.recentEmojis;
      }
    },

    getEmojiImgFromUnicode(unicode: string): string {
      return EmojiService.getEmojiImgFromUnicode(unicode, this.twemojiOptions);
    },

    setRecentEmojis(): void {
      let recentEmojis = null;
      if (this.recentEmojisStorage === 'local') {
        recentEmojis = JSON.parse(
          localStorage.getItem(this.recentEmojiStorageName) || '[]'
        );
      } else if (this.recentEmojisStorage === 'session') {
        recentEmojis = JSON.parse(
          sessionStorage.getItem(this.recentEmojiStorageName) || '[]'
        );
      } else {
        recentEmojis = [];
      }

      if (recentEmojis !== undefined && recentEmojis !== null) {
        this.recentEmojis = recentEmojis;
      }
    },
    addEmojiToRecentEmojis(emojiUnicode: string): void {
      const indexToRemove = this.recentEmojis.findIndex(
        (x: Emoji) => x.unicode === emojiUnicode
      );
      if (indexToRemove !== -1) {
        this.recentEmojis.splice(indexToRemove, 1);
        this.recentEmojis.unshift({
          unicode: emojiUnicode,
          img: EmojiService.getEmojiImgFromUnicode(
            emojiUnicode,
            this.twemojiOptions
          ),
          skins: [],
          tags: [],
        });
      } else {
        this.recentEmojis.unshift({
          unicode: emojiUnicode,
          img: EmojiService.getEmojiImgFromUnicode(
            emojiUnicode,
            this.twemojiOptions
          ),
          skins: [],
          tags: [],
        });
      }

      if (this.recentEmojis.length > this.recentEmojiLimit) {
        this.recentEmojis.splice(-1, 1);
      }

      if (this.recentEmojisStorage === 'local') {
        localStorage.setItem(
          this.recentEmojiStorageName,
          JSON.stringify(this.recentEmojis)
        );
      } else if (this.recentEmojisStorage === 'session') {
        sessionStorage.setItem(
          this.recentEmojiStorageName,
          JSON.stringify(this.recentEmojis)
        );
      }
    },

    searchEmojiByTerm() {
      this.isSearchingEmoji = true;
      clearTimeout(this.searchTimeout);
      if (this.searchTerm.length > 0) {
        this.searchTimeout = setTimeout(() => {
          this.searchEmojis = EmojiService.getEmojiImgArrayFromEmojiPackByTerm(
            this.emojiData,
            this.twemojiOptions,
            this.searchTerm
          );
          this.emojiGroupActive = -2;
          this.emojiListActive = this.searchEmojis;
          this.showSkinsSelector = false;
          this.isSearchingEmoji = false;
        }, 300);
      } else {
        this.changeEmojiListActive(0);
        this.isSearchingEmoji = false;
      }
    },
    popperOpenChanged(popperOpen: boolean) {
      this.isPickerOpen = popperOpen;
    },
    setPickerWidth() {
      if (
        typeof this.pickerWidth === 'string' &&
        this.pickerWidth.startsWith('#')
      ) {
        const domId = this.pickerWidth.slice(1);
        const domEl = document.getElementById(domId);
        if (domEl) this.calculatedPickerWidth = domEl.offsetWidth - 8;
      } else if (typeof this.pickerWidth === 'number') {
        this.calculatedPickerWidth = this.pickerWidth;
      } else {
        this.calculatedPickerWidth = DEFAULT_PICKER_WIDTH;
      }
    },
    onScrollEmojiList(event: UIEvent) {
      this.$refs.popupSkins.closePopper();
    },
  },
});
</script>
