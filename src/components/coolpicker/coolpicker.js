import EmojiService from '../../services/emoji-service';
import { VPopover } from 'v-tooltip';

export default {
  name: 'CoolPicker',
  components: {
    'v-popover': VPopover,
  },
  props: {
    pickerWidth: {
      default: 250,
      type: Number,
    },
    pickerMaxHeight: {
      default: 200,
      type: Number,
    },
    appendToBody: {
      default: false,
      type: Boolean,
    },
    triggerType: {
      default: 'click',
      type: String,
      validator: function (value) {
        if (value !== 'click' && value !== 'hover') {
          console.error('The value entered for the prop "triggerType" is invalid. '+
            'Valid values: "click" and "hover".');
        }
        return true;
      }
    },
    emojiData: {
      default: () => [],
      type: Array,
    },
    emojiGroups: {
      default: () => [],
      type: Array,
    },
    skinsSelection: {
      default: false,
      type: Boolean,
    },
    recentEmojisFeat: {
      default: false,
      type: Boolean,
    },
    recentEmojisStorage: {
      default: 'none',
      type: String,
      validator: function (value) {
        if (value !== 'local' && value !== 'session' && value !== 'none') {
          console.error('The value entered for the prop "recentEmojisStorage" is invalid. '+
            'Valid values: "local", "session" and "none".');
        }
        return true;
      }
    },
    recentEmojiStorageName: {
      default: 'cep-recent-emojis',
      type: String,
    },
    recentEmojiLimit: {
      default: 12,
      type: Number,
    },
    searchEmojisFeat: {
      default: false,
      type: Boolean,
    },
    searchEmojiPlaceholder: {
      default: 'Search emojis.',
      type: String,
    },
    searchEmojiNotFound: {
      default: 'No emojis found.',
      type: String,
    },
    twemojiPath: {
      default: 'https://twemoji.maxcdn.com/2/',
      type: String
    },
    twemojiExtension: {
      default: '.png',
      type: String,
      validator: function (value) {
        let bolValid = ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;
        if (bolValid === false) {
          console.error('The value entered for the prop "twemojiPath" is invalid. '+
            'Valid values: ".png", ".svg", ".jpg", ".jpeg", ".ico".');
        }
        return true;
      }
    },
    twemojiFolder: {
      default: '72x72',
      type: String
    },

    btnEmojiClasses: {
      default: () => [],
      type: Array
    },
  },
  data() {
    return {
      popperOptions: {
        modifiers: {
          flip: {
            enabled: false,
          },
        },
      },
      showSkinsSelector: false,
      skinsListActive: [],

      emojiPack: [],
      emojiListActive: [],
      emojiGroupActive: 0,

      randomEmoji: '😄',

      isPointerOnEmojiBtn: false,
      twemojiOptions: {},

      recentEmojis: [],

      searchTerm: '',
      searchEmojis: [ { emoji: '😄' }],
      searchTimeout: null,
    }
  },
  computed: {
    randomEmojiImg() {
      return EmojiService.getEmojiImgFromUnicode(this.randomEmoji, this.twemojiOptions);
    },
  },
  created() {
    this.twemojiOptions = { base: this.twemojiPath, ext: this.twemojiExtension, size: this.twemojiFolder };
    if (this.recentEmojisFeat) {
      this.setRecentEmojis();
    }
    this.buildEmojiPack();
    this.emojiListActive = this.emojiPack[0].emojiList;
    this.setRandomEmoji();
  },
  methods: {
    buildEmojiPack() {
      this.emojiPack = EmojiService.getEmojiImgArrayFromEmojiPack(this.emojiData, this.twemojiOptions);
    },
    onMouseEnterEmojiBtn() {
      if (this.isPointerOnEmojiBtn === false) {
        this.isPointerOnEmojiBtn = true;
        this.setRandomEmoji();
      }
    },
    onMouseLeaveEmojiBtn() {
      if (this.isPointerOnEmojiBtn === true) {
        this.isPointerOnEmojiBtn = false;
      }
    },
    setRandomEmoji() {
      let emoji = { unicode: '😄' };
      if (this.emojiPack.length !== 0) {
        emoji = this.emojiPack[0].emojiList[Math.floor(Math.random() * 20)];
      }
      this.randomEmoji = emoji.unicode;
    },

    clickEmoji(emoji) {
      let emojiUnicode;
      if (emoji.skins !== undefined 
        && emoji.skins.length !== 0
        && this.skinsSelection) {
          this.skinsListActive = Array.from(emoji.skins);
          this.skinsListActive.unshift({ unicode: emoji.unicode, img: emoji.img });
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
      this.$emit('emojiImgAdded', EmojiService.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions));
    },

    getEmojiGroupDescription(emojiGroup) {
      if (this.emojiGroups.length > 0) {
        return EmojiService.getEmojiImgFromUnicode(this.emojiGroups.find(x => x.group === emojiGroup).description, this.twemojiOptions);
      }
      return 'Group ' + emojiGroup;
    },

    changeEmojiListActive(index) {
      this.showSkinsSelector = false;
      this.searchTerm = '';
      this.emojiGroupActive = index;
      if (index >= 0) {
        this.emojiListActive = this.emojiPack[index].emojiList;
      } else if (index === -1) {
        this.emojiListActive = this.recentEmojis;
      }
    },

    getEmojiImgFromUnicode(unicode) {
      return EmojiService.getEmojiImgFromUnicode(unicode, this.twemojiOptions);
    },

    setRecentEmojis() {
      let recentEmojis = null;
      if (this.recentEmojisStorage === 'local') {
        recentEmojis = JSON.parse(localStorage.getItem(this.recentEmojiStorageName));
      } else if (this.recentEmojisStorage === 'session') {
        recentEmojis = JSON.parse(sessionStorage.getItem(this.recentEmojiStorageName));
      } else {
        recentEmojis = [];
      }

      if (recentEmojis !== undefined && recentEmojis !== null) {
        this.recentEmojis = recentEmojis;
      }
    },
    addEmojiToRecentEmojis(emojiUnicode) {
      const indexToRemove = this.recentEmojis.findIndex(x => x.unicode === emojiUnicode);
      if (indexToRemove !== -1) {
        this.recentEmojis.splice(indexToRemove, 1);
        this.recentEmojis
          .unshift(
            { 
              'unicode': emojiUnicode, 
              'img': EmojiService.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions)
            }
          );
      } else {
        this.recentEmojis
          .unshift(
            { 
              'unicode': emojiUnicode, 
              'img': EmojiService.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions)
            }
          );
      }

      if (this.recentEmojis.length > this.recentEmojiLimit) {
        this.recentEmojis.splice(-1, 1);
      }

      if (this.recentEmojisStorage === 'local') {
        localStorage.setItem(this.recentEmojiStorageName, JSON.stringify(this.recentEmojis));
      } else if (this.recentEmojisStorage === 'session') {
        sessionStorage.setItem(this.recentEmojiStorageName, JSON.stringify(this.recentEmojis));
      }
    },

    searchEmojiByTerm() {
      clearTimeout(this.searchTimeout);
      if (this.searchTerm.length > 0) {
        this.searchTimeout = setTimeout(() => {
          this.searchEmojis = EmojiService
            .getEmojiImgArrayFromEmojiPackByTerm(
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
};
