
import Twemoji from 'twemoji';

export default {
  getEmojiImgFromUnicode(unicode, twemojiOptions) {
    return Twemoji.parse(unicode, twemojiOptions);
  },
  
  getEmojiImgArrayFromEmojiPack(emojiPack, skinTone, twemojiOptions) {
    emojiPack = JSON.parse(JSON.stringify(emojiPack));
    let emojiPackWithImg = [];

    if (emojiPack !== undefined &&  emojiPack.length !== 0) {
      for (let i = 0; i < emojiPack.length; i++) {
        emojiPackWithImg[i] = {};
        emojiPackWithImg[i].group = emojiPack[i].group;
        emojiPackWithImg[i].emojiList = [];

        for (let j = 0; j < emojiPack[i].emojiList.length; j++) {
          const emoji = {};

          if (emojiPack[i].emojiList[j].skins !== undefined 
            && emojiPack[i].emojiList[j].skins.length !== 0 
            && skinTone !== 0) {
            emoji.unicode = emojiPack[i].emojiList[j].skins[skinTone - 1].unicode;
          } else {
            emoji.unicode = emojiPack[i].emojiList[j].unicode;
          }

          emoji.img = this.getEmojiImgFromUnicode(emoji.unicode, twemojiOptions);
          emojiPackWithImg[i].emojiList.push(emoji);
        }
      }
    }

    return emojiPackWithImg;
  },

  getEmojiImgArrayFromEmojiPackByTerm(emojiPack, skinTone, twemojiOptions, searchTerm) {
    emojiPack = JSON.parse(JSON.stringify(emojiPack));
    let emojiPackWithImg = [];

    if (emojiPack !== undefined &&  emojiPack.length !== 0) {
      for (let i = 0; i < emojiPack.length; i++) {
        for (let j = 0; j < emojiPack[i].emojiList.length; j++) {
          const emoji = {};

          if (emojiPack[i].emojiList[j].skins !== undefined 
            && emojiPack[i].emojiList[j].skins.length !== 0 
            && skinTone !== 0) {
            emoji.unicode = emojiPack[i].emojiList[j].skins[skinTone - 1].unicode;
          } else {
            emoji.unicode = emojiPack[i].emojiList[j].unicode;
          }

          emoji.img = this.getEmojiImgFromUnicode(emoji.unicode, twemojiOptions);

          for (let k = 0; k < emojiPack[i].emojiList[j].tags.length; k++) {
            if (emojiPack[i].emojiList[j].tags[k].includes(searchTerm)) {
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
