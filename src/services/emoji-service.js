
import Twemoji from 'twemoji';

export default {
  getEmojiImgFromUnicode(unicode, twemojiOptions) {
    return Twemoji.parse(unicode, twemojiOptions);
  },
  
  getEmojiImgArrayFromEmojiPack(emojiPack, skinTone, twemojiOptions) {
    let emojiPackWithImg = [];

    if (emojiPack !== undefined &&  emojiPack.length !== 0) {
      for (let i = 0; i < emojiPack.length; i++) {
        for (let j = 0; j < emojiPack[i].emojiList.length; j++) {
          const emoji = emojiPack[i].emojiList[j];
          if (emoji.skins !== undefined 
            && emoji.skins.length !== 0 
            && skinTone !== 0) {
            emoji.img = this.getEmojiImgFromUnicode(emoji.skins[skinTone - 1].unicode, twemojiOptions);
          } else {
            emoji.img = this.getEmojiImgFromUnicode(emoji.unicode, twemojiOptions);
          }
        }
      }

      emojiPackWithImg = emojiPack;
    }

    return emojiPackWithImg;
  }
};
