import TextareaParser from '../../services/textarea-parser';
import EmojiService from '../../services/emoji-service';
import CoolPicker from '../coolpicker/coolpicker.vue';

export default {
  name: 'CoolTextArea',
  components: {
    'coolpicker': CoolPicker,
  },
  props: {
    // ** Picker Props **/
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
    btnEmojiClasses: {
      default: () => [],
      type: Array
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

    // ** Textarea Props **/
    content: {
      default: '',
      type: String
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
    outerDivClasses: {
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
      savedRange: null,
    }
  },
  computed: {
    coolTextarea() {
      return this.$refs.coolTextarea;
    },
  },
  created() {
    this.twemojiOptions = { base: this.twemojiPath, ext: this.twemojiExtension, size: this.twemojiFolder };
  },
  mounted() {
    this.addText(this.content);
  },
  methods: {
    updateContent(event) {
      let content = event.target.innerHTML;
      content = TextareaParser.replaceEmojiWithAltAttribute(content);
      content = TextareaParser.unescapeHtml(content);
      if (content.length !== 0 && content[content.length - 1] === '\n') {
        content = content.slice(0, -1);
      }
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
    blur() {
      const doc = this.coolTextarea;
      doc.blur();
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

    addTextBlur(text) {
      this.focus();

      text = TextareaParser.escapeHTML(text);
      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);

      window.document.execCommand('insertHTML', false, text);
      this.saveSelection();
      this.blur();
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
    emojiUnicodeAdded(unicode) {
      this.$emit('emojiUnicodeAdded', unicode);
    },
    emojiImgAdded(img) {
      this.$emit('emojiImgAdded', img);
    }
  }
};
