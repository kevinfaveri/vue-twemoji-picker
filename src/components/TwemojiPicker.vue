<template>
  <v-popover
    theme="dropdown"
    :trigger="disabled ? 'manual' : triggerType"
    placement="top"
    :offset="-12"
    :popperOptions="popperOptions"
    :container="appendToBody ? 'body' : '#btn-emoji'"
  >
    <template #popper>
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
          >
          </span>
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
            maxHeight: pickerMaxHeight + 'px'
          }"
        >
          <div v-if="searchTerm.length !== 0 && searchEmojis.length === 0">
            <strong>{{ searchEmojiNotFound }}</strong>
          </div>

          <div v-if="emojiListActive.length !== 0">
            <p class="emoji-list">
              <span
                v-for="emoji in emojiListActive"
                :key="emoji.unicode"
                v-html="emoji.img"
                @click="clickEmoji(emoji)"
              >
              </span>
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
              width: pickerWidth + 'px',
              maxHeight: pickerMaxHeight + 'px'
            }"
          >
            <div v-if="emojiListActive.length !== 0">
              <p class="emoji-list">
                <span
                  v-for="emoji in skinsListActive"
                  :key="emoji.unicode"
                  v-html="emoji.img"
                  @click="clickEmoji(emoji)"
                >
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <button
      id="btn-emoji"
      @mouseenter="onMouseEnterEmojiBtn()"
      @mouseleave="onMouseLeaveEmojiBtn()"
      :disabled="disabled"
    >
      <div v-show="showEmoji" v-html="randomEmojiImg" class="fade-in"></div>
      <div v-show="!showEmoji" id="dummy-el"></div>
    </button>
  </v-popover>
</template>
<style lang="css">
/* Global */
img.emoji {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: -0.5rem;
}

/* Parent Emoji Popover */
#emoji-popover-header {
  padding: 5px;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

.emoji-popover-inner {
  border-top: #bdbcbc solid 1px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Inside Emoji Pack */
.emoji-tab {
  margin: 3px;
  border-radius: 5px;
  padding: 5px;
  padding-bottom: 8px;
  cursor: pointer;
  border-top: 3px solid #e6e6e6;
  border-left: 3px solid #e6e6e6;
  border-right: 3px solid #e6e6e6;
}

.emoji-tab:hover {
  background-color: #bdbcbc;
  border-color: #bdbcbc;
}

.emoji-tab.active {
  background-color: #bdbcbc;
  border-color: #bdbcbc;
}

.emoji-list {
  padding: 10px;
  margin: 0px;
  text-align: justify;
}

.emoji-list > span {
  font-size: 15px;
  cursor: pointer;
  border-radius: 15px;
}

.emoji-list > span > img {
  margin: 5px;
}

.emoji-list > span:hover {
  background-color: #cacaca;
}

/* Popper Emoji */
#btn-emoji {
  flex-grow: 100;
  border: none;
  cursor: pointer;
  height: 45px;
  border-radius: 25px;
  margin: 10px;
  background-color: transparent;
}

#btn-emoji > div > img.emoji {
  height: 25px;
  width: 25px;
}

#btn-emoji > #dummy-el {
  height: 25px;
  width: 25px;
}

#btn-emoji:disabled {
  opacity: 0.6;
  pointer-events: none;
}

/* Search Bar */
#emoji-popover-search {
  background-color: #e6e6e6;
  border-radius: 3px;
  margin-bottom: 5px;
}

#emoji-popover-search > #search-header {
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-flow: row wrap;
}

#emoji-popover-search > #search-header > input {
  flex-grow: 90;
  padding: 5px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  background-color: #fafafa;
}

#emoji-popover-search > #search-header > span {
  flex-grow: 10;
  border-radius: 5px;
  border: none;
  background-color: transparent;
}

/** Cursor */
.clickable {
  cursor: pointer;
}

/*Vue Tooltip / Popover Styles */
.v-popper__wrapper > .v-popper__inner {
  padding: 0;
  border: 3px #fafafa solid;
}

/** Transition - Fade */
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
import EmojiService from '../services/EmojiService';
import { Dropdown } from 'v-tooltip';
import 'v-tooltip/dist/v-tooltip.css';
import EmojiPack from '../interfaces/EmojiPack';
import Emoji from '../interfaces/Emoji';
import TwemojiOptions from '../interfaces/TwemojiOptions';
import PopperOptions from '../interfaces/PopperOptions';
import EmojiSkin from '../interfaces/EmojiSkin';
import EmojiGroup from '../interfaces/EmojiGroup';

export default Vue.extend({
  name: 'TwemojiPicker',

  components: {
    'v-popover': Dropdown
  },

  props: {
    disabled: {
      default: false,
      type: Boolean as () => boolean
    },
    pickerWidth: {
      default: 250,
      type: Number as () => number
    },
    pickerMaxHeight: {
      default: 200,
      type: Number as () => number
    },
    appendToBody: {
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
    emojiData: {
      default: () => [],
      type: Array as () => Array<EmojiPack>
    },
    emojiGroups: {
      default: () => [],
      type: Array as () => Array<EmojiGroup>
    },
    skinsSelection: {
      default: false,
      type: Boolean as () => boolean
    },
    recentEmojisFeat: {
      default: false,
      type: Boolean as () => boolean
    },
    recentEmojisStorage: {
      default: 'none',
      type: String as () => string,
      validator: function(value) {
        if (value !== 'local' && value !== 'session' && value !== 'none') {
          console.error(
            'The value entered for the prop "recentEmojisStorage" is invalid. ' +
              'Valid values: "local", "session" and "none".'
          );
        }
        return true;
      }
    },
    recentEmojiStorageName: {
      default: 'vue-recent-twemojis',
      type: String as () => string
    },
    recentEmojiLimit: {
      default: 12,
      type: Number as () => number
    },
    searchEmojisFeat: {
      default: false,
      type: Boolean as () => boolean
    },
    searchEmojiPlaceholder: {
      default: 'Search emojis.',
      type: String as () => string
    },
    searchEmojiNotFound: {
      default: 'No emojis found.',
      type: String as () => string
    },
    twemojiPath: {
      default: 'https://twemoji.maxcdn.com/2/',
      type: String as () => string
    },
    twemojiExtension: {
      default: '.png',
      type: String as () => string,
      validator: function(value) {
        const bolValid =
          ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;
        if (bolValid === false) {
          console.error(
            'The value entered for the prop "twemojiPath" is invalid. ' +
              'Valid values: ".png", ".svg", ".jpg", ".jpeg", ".ico".'
          );
        }
        return true;
      }
    },
    twemojiFolder: {
      default: '72x72',
      type: String as () => string
    }
  },

  data() {
    return {
      showEmoji: false as boolean,
      popperOptions: {
        modifiers: {
          flip: {
            enabled: false
          }
        }
      } as PopperOptions,
      showSkinsSelector: false as boolean,
      skinsListActive: [] as Array<EmojiSkin>,

      emojiPack: [] as Array<EmojiPack>,
      emojiListActive: [] as Array<Emoji>,
      emojiGroupActive: 0 as number,

      randomEmoji: '😄' as string,

      isPointerOnEmojiBtn: false as boolean,
      twemojiOptions: {} as TwemojiOptions,

      recentEmojis: [] as Array<Emoji>,

      searchTerm: '' as string,
      searchEmojis: [] as Array<Emoji>,
      searchTimeout: null as any
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
      let emoji = { unicode: '😄' };
      if (this.emojiPack.length !== 0) {
        emoji = this.emojiPack[0].emojiList[Math.floor(Math.random() * 20)];
      }
      this.randomEmoji = emoji.unicode;
    },

    clickEmoji(emoji: Emoji): void {
      let emojiUnicode;
      if (emoji.skins?.length !== 0 && this.skinsSelection) {
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
        }, 300);
      } else {
        this.changeEmojiListActive(0);
      }
    }
  }
});
</script>
