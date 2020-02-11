import Twemoji from 'twemoji';
import Emoji from '../interfaces/Emoji';
import EmojiPack from '../interfaces/EmojiPack';
import EmojiSkin from '../interfaces/EmojiSkin';

export default {
  getEmojiImgFromUnicode(unicode: string, twemojiOptions?: object): string {
    return Twemoji.parse(unicode, twemojiOptions);
  },

  getEmojiImgArrayFromEmojiPack(
    emojiPackArray: Array<EmojiPack>,
    twemojiOptions: object
  ): Array<EmojiPack> {
    emojiPackArray = JSON.parse(JSON.stringify(emojiPackArray));
    const emojiPackWithImg: Array<EmojiPack> = [];

    if (emojiPackArray?.length !== 0) {
      for (let i = 0; i < emojiPackArray.length; i++) {
        emojiPackWithImg[i] = { group: emojiPackArray[i].group, emojiList: [] };

        for (let j = 0; j < emojiPackArray[i].emojiList.length; j++) {
          const emoji: Emoji = { unicode: '', img: '', skins: [], tags: [] };
          const emojiAuxObj: Emoji = emojiPackArray[i].emojiList[j];

          if (emojiAuxObj.skins?.length > 0) {
            emoji.unicode = emojiAuxObj.unicode;
            emoji.skins = [];
            for (let k = 0; k < emojiAuxObj.skins.length; k++) {
              const skinObject: EmojiSkin = {
                unicode: emojiAuxObj.skins[k].unicode,
                img: this.getEmojiImgFromUnicode(
                  emojiAuxObj.skins[k].unicode,
                  twemojiOptions
                )
              };
              emoji.skins.push(skinObject);
            }
          } else {
            emoji.unicode = emojiAuxObj.unicode;
          }

          emoji.img = this.getEmojiImgFromUnicode(
            emoji.unicode,
            twemojiOptions
          );
          emojiPackWithImg[i].emojiList.push(emoji);
        }
      }
    }

    return emojiPackWithImg;
  },

  getEmojiImgArrayFromEmojiPackByTerm(
    emojiPackArray: Array<EmojiPack>,
    twemojiOptions: object,
    searchTerm: string
  ): Array<Emoji> {
    emojiPackArray = JSON.parse(JSON.stringify(emojiPackArray));
    const emojiPackWithImg = [];

    if (emojiPackArray?.length !== 0) {
      for (let i = 0; i < emojiPackArray.length; i++) {
        for (let j = 0; j < emojiPackArray[i].emojiList.length; j++) {
          const emoji: Emoji = { unicode: '', img: '', skins: [], tags: [] };
          const emojiAuxObj: Emoji = emojiPackArray[i].emojiList[j];

          if (emojiAuxObj.skins?.length > 0) {
            emoji.unicode = emojiAuxObj.unicode;
            emoji.skins = [];
            for (let k = 0; k < emojiAuxObj.skins.length; k++) {
              const skinObject = {
                unicode: emojiAuxObj.skins[k].unicode,
                img: this.getEmojiImgFromUnicode(
                  emojiAuxObj.skins[k].unicode,
                  twemojiOptions
                )
              };
              emoji.skins.push(skinObject);
            }
          } else {
            emoji.unicode = emojiPackArray[i].emojiList[j].unicode;
          }

          emoji.img = this.getEmojiImgFromUnicode(
            emoji.unicode,
            twemojiOptions
          );

          for (let k = 0; k < emojiAuxObj.tags.length; k++) {
            if (emojiAuxObj.tags[k].includes(searchTerm)) {
              emojiPackWithImg.push(emoji);
              break;
            }
          }
        }
      }
    }

    return emojiPackWithImg;
  }
};
