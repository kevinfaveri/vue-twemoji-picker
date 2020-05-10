<template>
  <div
    class="twemoji-textarea-outer"
    :id="idTextarea"
    :style="{
      paddingBottom: maxlength ? '15px' : '0px',
      backgroundColor: componentColor,
    }"
  >
    <twemoji-picker
      ref="twemojiPicker"
      v-bind="propsFor('twemoji-picker')"
      @addTextBlur="addTextBlur"
      @emojiUnicodeAdded="emojiUnicodeAdded"
      @emojiImgAdded="emojiImgAdded"
      :pickerPaddingOffset="pickerPaddingOffset"
    >
      <template v-for="(_, slotName) in $slots" v-slot:[slotName]>
        <slot :name="slotName" />
      </template>
    </twemoji-picker>

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
<style lang="stylus">
.twemoji-textarea-outer {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  border-radius: 1px;

  > #twemoji-textarea {
    flex-grow: 95;
    flex-basis: 0;
    background-color: #ffffff;
    font-size: 14px;
    overflow-y: auto;
    overflow-x: hidden;
    white-space: pre-wrap;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    text-align: left;
    cursor: text;

    &[placeholder]:empty:before {
      content: attr(placeholder);
      position: absolute;
      color: gray;
      background-color: transparent;
    }

    > img.emoji {
      height: 1.5rem;
      width: 1.5rem;
      vertical-align: -0.5rem;
    }
  }

  > #length-indicator {
    position: absolute;
    bottom: 2px;
    right: 20px;
    font-weight: bold;
  }

  >#send-btn {
    cursor: pointer;
    flex-grow: 5;
    flex-basis: 0;
    height: 40px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 5px;
    padding: 5px;

    > img {
      width: 25px;
      height: 25px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
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
import TwemojiPropWatchers from './TwemojiPicker/prop-watchers';
import { propsForMixin } from '../mixins/propsFor';

import TwitterText from 'twitter-text';

export default Vue.extend({
  name: 'TwemojiTextarea',

  components: {
    'twemoji-picker': TwemojiPicker,
    'send-icon-img': SendIconImg,
  },
  mixins: [propsForMixin],

  props: {
    ...TwemojiProps,

    // ** Textarea Props **/
    idTextarea: {
      default: 'twemoji-textarea-outer',
      type: String as () => string,
    },
    initialContent: {
      default: '',
      type: String as () => string,
    },
    enableSendBtn: {
      default: false,
      type: Boolean as () => boolean,
    },
    emojiPickerDisabled: {
      default: false,
      type: Boolean as () => boolean,
    },
    textareaDisabled: {
      default: false,
      type: Boolean as () => boolean,
    },
    componentColor: {
      type: String as () => string,
      default: '#F7F7F7',
      validator: function (value: string) {
        const s = new Option().style;
        s.color = value;
        const bolValid = s.color !== '';
        if (bolValid === false) {
          console.error(
            'The value entered for the prop "componentColor" is invalid. ' +
              'Please inform a valid CSS color.'
          );
        }
        return true;
      },
    },
    placeholder: {
      type: String as () => string,
      default: '',
    },
    maxlength: {
      type: Number as () => number,
      default: null,
    },
  },

  data() {
    return {
      savedRange: null as any,
      twemojiOptions: {} as TwemojiOptions,
      actualContentLength: 0 as number,
    };
  },

  computed: {
    twemojiTextarea(): any {
      return this.$refs.twemojiTextarea as HTMLElement;
    },
    twemojiPicker(): any {
      return this.$refs.twemojiPicker as any;
    },
  },

  created(): void {
    this.twemojiOptions = {
      base: this.twemojiPath,
      ext: this.twemojiExtension,
      size: this.twemojiFolder,
    };
  },

  mounted(): void {
    // Init TwemojiPicker watchers
    TwemojiPropWatchers(this, this.twemojiPicker);

    if (this.initialContent.length > 0) {
      this.twemojiTextarea.innerHTML = this.initialContent;
    }
  },

  methods: {
    updateContent(event: Event): void {
      const targetedElement = event.target as HTMLElement;
      let content = targetedElement.innerHTML as any;
      this.$emit('contentChangedHtml', content);
      content = TextareaParser.replaceEmojiWithAltAttribute(content);
      content = TextareaParser.unescapeHtml(content);
      if (content.length !== 0 && content[content.length - 1] === '\n') {
        content = content.slice(0, -1);
      }
      this.actualContentLength = TwitterText.parseTweet(
        content || ''
      ).weightedLength;
      if (this.twemojiPicker.$refs.popupEmoji)
        this.twemojiPicker.$refs.popupEmoji.popperInstance.forceUpdate();
      this.$emit('update:content', content);
      this.$emit('actualContentLengthChanged', this.actualContentLength);
      this.$emit('contentChanged', content);
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
        event.preventDefault();
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
      if (this.twemojiPicker.$refs.popupEmoji)
        this.twemojiPicker.$refs.popupEmoji.popperInstance.forceUpdate();
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
    },
  },
});
</script>
