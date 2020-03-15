<template>
  <div
    class="twemoji-textarea-outer"
    :class="'bg-' + componentColor"
    :style="{ paddingBottom: maxlength ? '15px' : '0px' }"
  >
    <twemoji-picker v-bind="propsFor('twemoji-picker')"></twemoji-picker>

    <div
      ref="twemojiTextarea"
      id="twemoji-textarea"
      class="twemojiTextarea"
      :contenteditable="textareaDisabled ? false : true"
      @input="updateContent"
      @paste="onPaste"
      @keydown.exact.enter="enterKey"
      @keydown.shift.enter="shiftEnterKey"
      @mouseup="saveSelection"
      @keyup="saveSelection"
      @focus="restoreSelection"
      :placeholder="placeholder"
    ></div>

    <div id="send-btn" @click="emitEnterKeyEvent" v-if="enableSendBtn">
      <send-icon-img />
    </div>

    <div id="length-indicator" v-if="maxlength">
      <span
        :style="{ color: actualContentLength > maxlength ? 'red' : 'black' }"
        >{{ actualContentLength }}</span
      >
      /
      <span>{{ maxlength }}</span>
    </div>
  </div>
</template>
<style lang="css">
/* Global */
#send-btn {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.twemoji-textarea-outer {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  border-radius: 1px;
}

img.emoji {
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: -0.5rem;
}

/* Textarea */
.twemojiTextarea {
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

#twemoji-textarea[placeholder]:empty:before {
  content: attr(placeholder);
  position: absolute;
  color: gray;
  background-color: transparent;
}

#length-indicator {
  position: absolute;
  bottom: 2px;
  right: 20px;
  font-weight: bold;
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
.bg-default {
  background-color: #ebebeb;
}

.btn-default {
  background-color: #ebebeb;
}

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
import TwemojiPicker from './TwemojiPicker';
import SendIconImg from './SendIconImg.vue';
import TwemojiOptions from '../interfaces/TwemojiOptions';

import TwemojiProps from './TwemojiPicker/props';
import { propsForMixin } from '../mixins/propsFor';

export default Vue.extend({
  name: 'TwemojiTextarea',

  components: {
    'twemoji-picker': TwemojiPicker,
    'send-icon-img': SendIconImg
  },
  mixins: [propsForMixin],

  props: {
    ...TwemojiProps,

    // ** Textarea Props **/
    content: {
      default: '',
      type: String as () => string
    },
    enableSendBtn: {
      default: false,
      type: Boolean as () => boolean
    },
    emojiPickerDisabled: {
      default: false,
      type: Boolean as () => boolean
    },
    textareaDisabled: {
      default: false,
      type: Boolean as () => boolean
    },
    componentColor: {
      type: String as () => string,
      default: 'default',
      validator: function(value) {
        const bolValid =
          [
            'default',
            'cream',
            'cherry',
            'forest',
            'ocean',
            'sun',
            'transparent'
          ].indexOf(value) !== -1;
        if (bolValid === false) {
          console.error(
            'The value entered for the prop "componentColor" is invalid. ' +
              'Valid values: "default", "cream", "cherry", "forest", "ocean", "sun".'
          );
        }
        return true;
      }
    },
    placeholder: {
      type: String as () => string,
      default: ''
    },
    maxlength: {
      type: Number as () => number,
      default: null
    }
  },

  data() {
    return {
      savedRange: null as any,
      twemojiOptions: {} as TwemojiOptions,
      actualContentLength: 0 as number
    };
  },

  computed: {
    twemojiTextarea(): HTMLElement {
      return this.$refs.twemojiTextarea as HTMLElement;
    }
  },

  created(): void {
    this.twemojiOptions = {
      base: this.twemojiPath,
      ext: this.twemojiExtension,
      size: this.twemojiFolder
    };
  },

  mounted(): void {
    if (this.content.length === 0) {
      this.twemojiTextarea.innerHTML = this.content;
    }
  },

  methods: {
    updateContent(event: Event): void {
      const targetedElement = event.target as HTMLElement;
      let content = targetedElement.innerHTML as any;
      content = TextareaParser.replaceEmojiWithAltAttribute(content);
      content = TextareaParser.unescapeHtml(content);
      if (content.length !== 0 && content[content.length - 1] === '\n') {
        content = content.slice(0, -1);
      }
      this.actualContentLength = [...content].length;
      this.$emit('update:content', content);
      this.$emit('actualContentLengthChanged', this.actualContentLength);
      this.$emit('contentChanged');
    },
    emitIsContentOverflowed() {
      if (this.actualContentLength > this.maxlength)
        this.$emit('isContentOverflowed', true);
      else this.$emit('isContentOverflowed', false);
    },
    emitEnterKeyEvent(event: Event): void {
      this.emitIsContentOverflowed();
      this.$emit('enterKey', event);
    },
    enterKey(event: KeyboardEvent): void {
      if (event.shiftKey === false) {
        this.emitIsContentOverflowed();
        this.emitEnterKeyEvent(event);
      }
    },
    shiftEnterKey(event: KeyboardEvent): void {
      event.stopPropagation();
      event.preventDefault();

      if (
        this.twemojiTextarea.innerHTML === '' ||
        this.twemojiTextarea.innerHTML[
          this.twemojiTextarea.innerHTML.length - 1
        ] !== '\n'
      ) {
        this.addText('\n');
        this.addText('\n');
      } else {
        this.addText('\n');
      }

      this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;
    },
    onPaste(pasteEvent: ClipboardEvent): void {
      let pastedData;

      pasteEvent.stopPropagation();
      pasteEvent.preventDefault();
      const clipboardData = pasteEvent.clipboardData;
      pastedData = clipboardData?.getData('Text') || '';
      pastedData = TextareaParser.escapeHTML(pastedData);
      pastedData = EmojiService.getEmojiImgFromUnicode(
        pastedData,
        this.twemojiOptions
      );

      window.document.execCommand('insertHTML', false, pastedData);

      this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;
    },
    focus(): void {
      const doc = this.twemojiTextarea;
      const childNode = doc.childNodes[0];
      doc.focus();

      if (childNode === undefined) {
        const textNode = document.createTextNode('');
        doc.appendChild(textNode);
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(doc.childNodes[0], 0);
        range.collapse(true);
        sel?.removeAllRanges();
        sel?.addRange(range);
        this.saveSelection();
      }
    },
    blur(): void {
      const doc = this.twemojiTextarea;
      doc.blur();
    },
    saveSelection(): void {
      if (window.getSelection) {
        this.savedRange = window.getSelection()?.getRangeAt(0);
      }
    },
    restoreSelection(): void {
      const doc = this.twemojiTextarea;
      doc.focus();
      if (this.savedRange != null) {
        if (window.getSelection) {
          const s = window.getSelection();
          if (s?.rangeCount || 0 > 0) {
            s?.removeAllRanges();
          }
          s?.addRange(this.savedRange);
        }
      }
    },

    addTextBlur(text: string): void {
      this.focus();

      text = TextareaParser.escapeHTML(text);
      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);

      window.document.execCommand('insertHTML', false, text);
      this.saveSelection();
      this.blur();
    },
    addText(text: string): void {
      this.focus();

      text = TextareaParser.escapeHTML(text);
      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);

      window.document.execCommand('insertHTML', false, text);
      this.saveSelection();
    },
    cleanText(): void {
      this.twemojiTextarea.innerHTML = '';
      this.$emit('update:content', '');
    },
    emojiUnicodeAdded(unicode: string): void {
      this.$emit('emojiUnicodeAdded', unicode);
    },
    emojiImgAdded(img: string): void {
      this.$emit('emojiImgAdded', img);
    }
  }
});
</script>
