import EmojiService from '../../services/emoji-service';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/css/vue-popper.css';
import { ObserveVisibility } from 'vue-observe-visibility';

export default {
  name: 'CoolPicker',
  components: {
    'popper': Popper,
  },
  directives: {
    ObserveVisibility
  },
  props: {
    emojiData: {
      default: () => [],
      type: Array,
    },
    emojiGroups: {
      default: () => [],
      type: Array,
    },
    skinToneSelection: {
      default: false,
      type: Boolean,
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
      emojiPack: [],
      visibleEmojiGroups: [],
      randomEmoji: '😄',
      skinToneActive: 0,
      isPointerOnEmojiBtn: false,
      twemojiOptions: {}
    }
  },
  watch: {
    skinToneActive() {
      this.buildEmojiPack();
    },
  },
  computed: {
    randomEmojiImg() {
      return EmojiService.getEmojiImgFromUnicode(this.randomEmoji, this.twemojiOptions);
    },
  },
  created() {
    this.twemojiOptions = { base: this.twemojiPath, ext: this.twemojiExtension, size: this.twemojiFolder };
    this.buildEmojiPack();
    this.setRandomEmoji();
  },
  methods: {
    // Emoji Pack
    buildEmojiPack() {
      const emojiDataTrim = [];
      if (this.emojiData.length === 1) {
        emojiDataTrim.push(this.emojiData[0]);
        this.visibleEmojiGroups.push(this.emojiData[0].group);
      } else if (this.emojiData.length >= 2) {
        this.visibleEmojiGroups.push(this.emojiData[0].group);
        this.visibleEmojiGroups.push(this.emojiData[1].group);

        emojiDataTrim.push(this.emojiData[0]);
        emojiDataTrim.push(this.emojiData[1]);
      }
      this.emojiPack = EmojiService.getEmojiImgArrayFromEmojiPack(emojiDataTrim, this.skinToneActive, this.twemojiOptions);
    },
    addOnDemandToEmojiPack(emojiData) {
      this.emojiPack = this.emojiPack.concat(
        EmojiService.getEmojiImgArrayFromEmojiPack([emojiData], this.skinToneActive, this.twemojiOptions)
      );
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

    addEmojiToTextarea(emoji) {
      let emojiUnicode;
      if (emoji.skins !== undefined 
        && emoji.skins.length !== 0 
        && this.skinToneActive !== 0) {
          emojiUnicode = emoji.skins[this.skinToneActive - 1].unicode;
      } else {
        emojiUnicode = emoji.unicode;
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

    setSkinTone(tone) {
      this.skinToneActive = tone;
    },

    // On Demand Rendering of Emoji Groups
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        const groupIdVisible = Number(entry.target.id);
        const indexOfEmojiData = this.emojiData.findIndex(x => x.group === groupIdVisible);
        let indexOfVisibleEmojiGroup;

        if ((indexOfEmojiData + 1) !== this.emojiData.length) {
          indexOfVisibleEmojiGroup = this.visibleEmojiGroups.findIndex(x => x === this.emojiData[indexOfEmojiData + 1].group);
        }

        if (this.emojiData[indexOfEmojiData + 1] !== undefined 
          && indexOfVisibleEmojiGroup === -1) {
          this.visibleEmojiGroups.push(this.emojiData[indexOfEmojiData + 1].group);
          this.addOnDemandToEmojiPack(this.emojiData[indexOfEmojiData + 1]);
        }
      }
    },
  }
};
