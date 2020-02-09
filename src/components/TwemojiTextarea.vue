<template>
  <div class="cooltextarea-outer" :class="'bg-' + componentColor">
    <twemoji-picker
      :pickerWidth="pickerWidth"
      :pickerMaxHeight="pickerMaxHeight"
      :appendToBody="appendToBody"
      :triggerType="triggerType"
      :emojiData="emojiData"
      :emojiGroups="emojiGroups"
      :skinsSelection="skinsSelection"
      :recentEmojisFeat="recentEmojisFeat"
      :recentEmojisStorage="recentEmojisStorage"
      :recentEmojiStorageName="recentEmojiStorageName"
      :recentEmojiLimit="recentEmojiLimit"
      :searchEmojisFeat="searchEmojisFeat"
      :searchEmojiPlaceholder="searchEmojiPlaceholder"
      :searchEmojiNotFound="searchEmojiNotFound"
      :twemojiPath="twemojiPath"
      :twemojiExtension="twemojiExtension"
      :twemojiFolder="twemojiFolder"
      :disabled="disableEmojiPicker"
      @addTextBlur="addTextBlur"
      @emojiUnicodeAdded="emojiUnicodeAdded"
      @emojiImgAdded="emojiImgAdded"
    ></twemoji-picker>

    <div
      ref="coolTextarea"
      id="cool-text-area"
      class="cooltextarea"
      :contenteditable="disabled ? false : true"
      @input="updateContent"
      @paste="onPaste"
      @keydown.exact.enter="enterKey"
      @keydown.shift.enter="shiftEnterKey"
      @mouseup="saveSelection"
      @keyup="saveSelection"
      @focus="restoreSelection"
    ></div>

    <div id="send-btn" @click="emitEnterKeyEvent" v-if="enableSendBtn">
      <send-icon-img />
    </div>
  </div>
</template>
<style lang="css">
/* Global */
#send-btn {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.cooltextarea-outer {
  display: flex;
  flex-flow: row wrap;
  border-radius: 25px;
}

img.emoji {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: -0.5rem;
}

/* Textarea */
.cooltextarea {
  flex-grow: 95;
  flex-basis: 0;
  background-color: #fafafa;
  font-size: 14px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: pre-wrap;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  text-align: left;
}

#send-btn {
  cursor: pointer;
  flex-grow: 5;
  flex-basis: 0;
  height: 40px;
  border-radius: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 5px;
  padding: 5px;
}

#send-btn > img {
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Component Colors */
.bg-cream {
  background-color: #ece7e7;
}

.btn-cream {
  background-color: #ece7e7;
}

.btn-cream:hover {
  background-color: #ded3d3;
}

.bg-cherry {
  background-color: #dd7e91;
}

.btn-cherry {
  background-color: #dd7e91;
}

.btn-cherry:hover {
  background-color: #d45e76;
}

.bg-forest {
  background-color: #84caaf;
}

.btn-forest {
  background-color: #84caaf;
}

.btn-forest:hover {
  background-color: #5eba97;
}

.bg-ocean {
  background-color: #93b8e9;
}

.btn-ocean {
  background-color: #93b8e9;
}

.btn-ocean:hover {
  background-color: #6b9ee1;
}

.bg-sun {
  background-color: #d6dfb0;
}

.btn-sun {
  background-color: #d6dfb0;
}

.btn-sun:hover {
  background-color: #c7d392;
}

.btn-transparent {
  background-color: transparent;
}

.btn-transparent:hover {
  background-color: transparent;
}
</style>
<script lang="ts">
import Vue from 'vue';
import TextareaParser from '../services/TextareaParser';
import EmojiService from '../services/EmojiService';
import TwemojiPicker from './TwemojiPicker.vue';
import SendIconImg from './SendIconImg.vue';

export default Vue.extend({
  name: 'TwemojiTextarea',

  components: {
    'twemoji-picker': TwemojiPicker,
    'send-icon-img': SendIconImg
  },

  props: {
    // ** Picker Props **/
    pickerWidth: {
      default: 250,
      type: Number
    },
    pickerMaxHeight: {
      default: 200,
      type: Number
    },
    appendToBody: {
      default: false,
      type: Boolean
    },
    triggerType: {
      default: 'click',
      type: String,
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
      type: Array
    },
    emojiGroups: {
      default: () => [],
      type: Array
    },
    skinsSelection: {
      default: false,
      type: Boolean
    },
    recentEmojisFeat: {
      default: false,
      type: Boolean
    },
    recentEmojisStorage: {
      default: 'none',
      type: String,
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
      default: 'cep-recent-emojis',
      type: String
    },
    recentEmojiLimit: {
      default: 12,
      type: Number
    },
    searchEmojisFeat: {
      default: false,
      type: Boolean
    },
    searchEmojiPlaceholder: {
      default: 'Search emojis.',
      type: String
    },
    searchEmojiNotFound: {
      default: 'No emojis found.',
      type: String
    },
    twemojiPath: {
      default: 'https://twemoji.maxcdn.com/2/',
      type: String
    },
    twemojiExtension: {
      default: '.png',
      type: String,
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
    disableEmojiPicker: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    componentColor: {
      default: 'cream',
      validator: function(value) {
        const bolValid =
          ['cream', 'cherry', 'forest', 'ocean', 'sun', 'transparent'].indexOf(
            value
          ) !== -1;
        if (bolValid === false) {
          console.error(
            'The value entered for the prop "componentColor" is invalid. ' +
              'Valid values: "cream", "cherry", "forest", "ocean", "sun".'
          );
        }
        return true;
      }
    }
  },

  data() {
    return {
      savedRange: null
    };
  },

  computed: {
    coolTextarea() {
      return this.$refs.coolTextarea;
    }
  },

  created() {
    this.twemojiOptions = {
      base: this.twemojiPath,
      ext: this.twemojiExtension,
      size: this.twemojiFolder
    };
  },

  mounted() {
    this.addText(this.content);
  },

  methods: {
    updateContent(event: object) {
      let content = event.target.innerHTML;
      content = TextareaParser.replaceEmojiWithAltAttribute(content);
      content = TextareaParser.unescapeHtml(content);
      if (content.length !== 0 && content[content.length - 1] === '\n') {
        content = content.slice(0, -1);
      }
      this.$emit('update:content', content);
      this.$emit('contentChanged');
    },
    emitEnterKeyEvent(event: object) {
      this.$emit('enterKey', event);
    },
    enterKey(event: object) {
      if (event.shiftKey === false) this.emitEnterKeyEvent(event);
    },
    shiftEnterKey(event: object) {
      event.stopPropagation();
      event.preventDefault();

      if (
        this.coolTextarea.innerHTML === '' ||
        this.coolTextarea.innerHTML[this.coolTextarea.innerHTML.length - 1] !==
          '\n'
      ) {
        this.addText('\n');
        this.addText('\n');
      } else {
        this.addText('\n');
      }

      this.coolTextarea.scrollTop = this.coolTextarea.scrollHeight;
    },
    onPaste(pasteEvent: object) {
      let clipboardData, pastedData;

      pasteEvent.stopPropagation();
      pasteEvent.preventDefault();

      clipboardData = pasteEvent.clipboardData || window.clipboardData;
      pastedData = clipboardData.getData('Text');
      pastedData = TextareaParser.escapeHTML(pastedData);
      pastedData = EmojiService.getEmojiImgFromUnicode(
        pastedData,
        this.twemojiOptions
      );

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
    saveSelection() {
      if (window.getSelection) {
        this.savedRange = window.getSelection().getRangeAt(0);
      } else if (document.selection) {
        this.savedRange = document.selection.createRange();
      }
    },
    restoreSelection() {
      const doc = this.coolTextarea;
      doc.focus();
      if (this.savedRange != null) {
        if (window.getSelection) {
          const s = window.getSelection();
          if (s.rangeCount > 0) {
            s.removeAllRanges();
          }
          s.addRange(this.savedRange);
        } else if (document.createRange) {
          window.getSelection().addRange(this.savedRange);
        } else if (document.selection) {
          this.savedRange.select();
        }
      }
    },

    addTextBlur(text: string) {
      this.focus();

      text = TextareaParser.escapeHTML(text);
      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);

      window.document.execCommand('insertHTML', false, text);
      this.saveSelection();
      this.blur();
    },
    addText(text: string) {
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
    emojiUnicodeAdded(unicode: string) {
      this.$emit('emojiUnicodeAdded', unicode);
    },
    emojiImgAdded(img: string) {
      this.$emit('emojiImgAdded', img);
    }
  }
});
</script>
