declare module '@kevinfaguiar/vue-twemoji-picker' {
  import Vue from 'vue';
  class TwemojiPicker extends Vue {}
  class TwemojiTextarea extends Vue {}
  const EmojiService: any;
  const TextareaParser: any;
  export { TwemojiTextarea, TwemojiPicker, EmojiService, TextareaParser };
}
