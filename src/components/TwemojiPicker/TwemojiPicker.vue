<template>
  <div>
    <popper
      v-if="emojiData && emojiData.length > 0"
      :disabled="emojiPickerDisabled"
      :triggerType="triggerType"
      :placement="pickerPlacement"
      :autoflip="pickerAutoflip"
      :arrowEnabled="pickerArrowEnabled"
      :offset="[0, 25]"
      :closeOnClickaway="pickerCloseOnClickaway"
      @popperOpenChanged="popperOpenChanged"
    >
      <template v-slot:container>
        <div id="emoji-container">
          <div id="emoji-popup" :style="{ width: pickerWidth + 'px' }">
            <div id="emoji-popover-header" class="scroll-min">
              <span
                v-if="recentEmojisFeat && recentEmojis.length !== 0"
                v-html="getEmojiImgFromUnicode('⏱️')"
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

            <div id="emoji-popover-search" v-if="searchEmojisFeat">
              <div id="search-header">
                <input
                  @input="searchEmojiByTerm"
                  :placeholder="searchEmojiPlaceholder"
                  v-model="searchTerm"
                />
                <span v-html="getEmojiImgFromUnicode('🔍')"></span>
              </div>
            </div>

            <div
              class="emoji-popover-inner"
              :style="{
                width: pickerWidth + 'px',
                height: pickerHeight + 'px'
              }"
            >
              <div v-if="isSearchingEmoji">
                <strong
                  :style="{
                    padding: '3px'
                  }"
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
                    padding: '3px'
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
                  ></span>
                </p>
              </div>
            </div>

            <div
              id="emoji-skins-popup"
              :style="{ width: pickerWidth + 'px' }"
              v-if="showSkinsSelector"
            >
              <div
                class="emoji-popover-inner"
                :style="{
                  width: pickerWidth + 'px'
                }"
              >
                <div v-if="emojiListActive.length !== 0">
                  <p class="emoji-list">
                    <span
                      v-for="emoji in skinsListActive"
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
    </popper>
  </div>
</template>
<style lang="stylus">
/* Parent Emoji Popover */
#emoji-container {
  z-index: 1;

  > #emoji-popup {
    img.emoji {
      height: 1.5rem;
      width: 1.5rem;
      vertical-align: -0.5rem;
    }

    > #emoji-popover-header {
      padding: 5px;
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;

      > .emoji-tab {
        margin: 3px;
        border-radius: 5px;
        padding: 5px;
        padding-bottom: 8px;
        cursor: pointer;
        border-top: 3px solid #e6e6e6;
        border-left: 3px solid #e6e6e6;
        border-right: 3px solid #e6e6e6;

        &:hover {
          background-color: #bdbcbc;
          border-color: #bdbcbc;
        }

        &.active {
          background-color: #bdbcbc;
          border-color: #bdbcbc;
        }
      }
    }

    .emoji-popover-inner {
      border-top: #bdbcbc solid 1px;
      overflow-y: auto;
      overflow-x: hidden;

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
      background-color: #e6e6e6;
      border-radius: 3px;
      margin-bottom: 5px;

      > #search-header {
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        flex-flow: row wrap;

        > input {
          flex-grow: 90;
          padding: 5px;
          margin-left: 5px;
          border: none;
          border-radius: 5px;
          background-color: #fafafa;
        }

        > span {
          flex-grow: 10;
          border-radius: 5px;
          border: none;
          background-color: transparent;
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
  border-radius: 25px;
  margin: 10px;
  background-color: transparent;

  > div > img.emoji {
    height: 25px;
    width: 25px;
  }

  > #dummy-el {
    height: 25px;
    width: 25px;
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
import PopperV2 from '../PopperV2.vue';
import EmojiPack from '../../interfaces/EmojiPack';
import Emoji from '../../interfaces/Emoji';
import TwemojiOptions from '../../interfaces/TwemojiOptions';
import EmojiSkin from '../../interfaces/EmojiSkin';
import EmojiGroup from '../../interfaces/EmojiGroup';

import Props from './props';

// TODO: Aceitar id do element para picker width (deve então setar um watcher deixando o width do player sempre igual ao id do element)
export default Vue.extend({
  name: 'TwemojiPicker',

  components: {
    popper: PopperV2
  },

  props: {
    ...Props
  },

  data() {
    return {
      isPickerOpen: false as boolean,

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
      isSearchingEmoji: false as boolean
    };
  },

  computed: {
    randomEmojiImg(): string {
      this.triggerShowEmoji();
      return EmojiService.getEmojiImgFromUnicode(
        this.randomEmoji,
        this.twemojiOptions
      );
    }
  },

  created(): void {
    this.twemojiOptions = {
      base: this.twemojiPath,
      ext: this.twemojiExtension,
      size: this.twemojiFolder
    };
    if (this.recentEmojisFeat) {
      this.setRecentEmojis();
    }
    this.buildEmojiPack();
    this.emojiListActive = this.emojiPack[0].emojiList;
    this.setRandomEmoji();
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
      let emojiUnicode: string;
      if (emoji.skins?.length > 0 && this.skinsSelection) {
        this.skinsListActive = Array.from(emoji.skins);
        this.skinsListActive.unshift({
          unicode: emoji.unicode,
          img: emoji.img
        });
        this.showSkinsSelector = true;
        return;
      } else {
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
          tags: []
        });
      } else {
        this.recentEmojis.unshift({
          unicode: emojiUnicode,
          img: EmojiService.getEmojiImgFromUnicode(
            emojiUnicode,
            this.twemojiOptions
          ),
          skins: [],
          tags: []
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
    }
  }
});
</script>
