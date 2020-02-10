import EmojiSkin from './EmojiSkin';

export default interface Emoji {
  unicode: string;
  img: string;
  skins: Array<EmojiSkin>;
  tags: Array<string>;
}
