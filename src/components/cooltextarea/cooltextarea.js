import TextareaParser from '../../services/textarea-parser';
import EmojiService from '../../services/emoji-service';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/css/vue-popper.css';
import { ObserveVisibility } from 'vue-observe-visibility';

export default {
  name: 'CoolTextArea',
  components: {
    'popper': Popper,
  },
  directives: {
    ObserveVisibility
  },
  props: {
    content: {
      default: '',
      type: String
    },
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
    enableEmojiPicker: {
      default: true,
      type: Boolean,
    },
    enableTextarea: {
      default: true,
      type: Boolean,
    },
    enableSendBtn: {
      default: false,
      type: Boolean
    },
    componentColor: {
      default: 'cream',
      validator: function (value) {
        let bolValid =  ['cream', 'cherry', 'forest', 'ocean', 'sun'].indexOf(value) !== -1;
        if (bolValid === false) {
          console.error('The value entered for the prop "componentColor" is invalid. '+
            'Valid values: "cream", "cherry", "forest", "ocean", "sun".');
        }
        return true;
      }
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

    outerDivClasses: {
      default: () => [],
      type: Array
    },
    btnEmojiClasses: {
      default: () => [],
      type: Array
    },
    cooltextAreaClasses: {
      default: () => [],
      type: Array
    },
  },
  data() {
    return {
      isBtnFocused: false,
      savedRange: null,

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
    coolTextarea() {
      return this.$refs.coolTextarea;
    },
    randomEmojiImg() {
      return EmojiService.getEmojiImgFromUnicode(this.randomEmoji, this.twemojiOptions);
    },
  },
  created() {
    this.twemojiOptions = { base: this.twemojiPath, ext: this.twemojiExtension, size: this.twemojiFolder };
    this.buildEmojiPack();
    this.setRandomEmoji();
  },
  mounted() {
    this.addText(this.content);
  },
  methods: {
    updateContent(event) {
      let content = event.target.innerHTML;
      content = TextareaParser.replaceEmojiWithAltAttribute(content);
      if (content.length !== 0 && content[content.length - 1] === '\n') {
        content = content.slice(0, -1);
      }
      console.log('content', content);
      this.$emit('update:content', content);
      this.$emit('contentChanged');
    },
    emitEnterKeyEvent() {
      this.$emit('enterKey');
    },
    enterKey(event) {
      event.stopPropagation();
      event.preventDefault();
      if (event.shiftKey === false) {
        this.emitEnterKeyEvent();
      }
    },
    shiftEnterKey(event) {
      event.stopPropagation();
      event.preventDefault();

      if (this.coolTextarea.innerHTML === '' || 
        this.coolTextarea.innerHTML[this.coolTextarea.innerHTML.length -1] !== '\n') {
        this.addText('\n');
        this.addText('\n');
      } else {
        this.addText('\n');
      }

      this.coolTextarea.scrollTop = this.coolTextarea.scrollHeight;
    },
    onPaste(pasteEvent) {
      var clipboardData, pastedData;

      pasteEvent.stopPropagation();
      pasteEvent.preventDefault();

      clipboardData = pasteEvent.clipboardData || window.clipboardData;
      pastedData = clipboardData.getData('Text');
      pastedData = TextareaParser.escapeHTML(pastedData);
      pastedData = EmojiService.getEmojiImgFromUnicode(pastedData, this.twemojiOptions);

      window.document.execCommand('insertHTML', false, pastedData);

      this.coolTextarea.scrollTop = this.coolTextarea.scrollHeight;
    },
    focus() {
      const doc = this.coolTextarea;
      const childNode = doc.childNodes[0];
      doc.focus();

      if (childNode === undefined) {
        const textNode = document.createTextNode('');
        doc.appendChild(textNode);
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(doc.childNodes[0], 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        this.saveSelection();
      }
    },
    saveSelection(){
      if (window.getSelection) {
        this.savedRange = window.getSelection().getRangeAt(0);
      } else if (document.selection) { 
        this.savedRange = document.selection.createRange();  
      } 
    },
    restoreSelection(){
      const doc = this.coolTextarea;
      doc.focus();
      if (this.savedRange != null) {
        if (window.getSelection)  {
          const s = window.getSelection();
          if (s.rangeCount > 0) {
            s.removeAllRanges();
          }
          s.addRange(this.savedRange);
        } else if (document.createRange)  {
          window.getSelection().addRange(this.savedRange);
        } else if (document.selection)  {
          this.savedRange.select();
        }
      }
    },

    addText(text) {
      this.focus();

      text = TextareaParser.escapeHTML(text);
      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);

      window.document.execCommand('insertHTML', false, text);
      this.saveSelection();
    },
    cleanText() {
      this.coolTextarea.innerHTML = '';
      this.$emit('update:content', '');
    },
    
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
      this.addText(emojiUnicode);
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
