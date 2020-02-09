import { EmojiSkin } from './EmojiSkin';

export interface Emoji {
  unicode: string;
  img: string;
  skins: Array<EmojiSkin>;
  tags: Array<string>
}