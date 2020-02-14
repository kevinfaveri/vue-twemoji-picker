---
title: 'Services'
---

# Services

Services are auxiliary libraries used by this project which can me imported directly by the user if needed. Some functions may need a better study of the source code. **Issues regarding improvement for these services which does not bring any benefits to the TwemojiPicker or TwemojiTextarea will be closed.**

## EmojiService

### getEmojiImgFromUnicode(unicode: string, twemojiOptions?: object)

This function receives an emoji character Unicode and returns the equivalent Twemoji art IMG tag. It also receives as an optional parameter [a TwemojiOptions object](https://github.com/twitter/twemoji).

### getEmojiImgArrayFromEmojiPack(emojiPackArray: Array, twemojiOptions: object):

This function receives an emojiPackArray and returns in emojiPackArray containing the IMG tag for each emoji Unicode. It also receives [a TwemojiOptions object](https://github.com/twitter/twemoji) as second parameter.

### getEmojiImgArrayFromEmojiPackByTerm(emojiPackArray: Array, twemojiOptions: object, searchTerm: string)

This function receives an emojiPackArray and returns in emojiPackArray containing the IMG tag for each emoji Unicode searched (by the searchTerm parameter). It also receives [a TwemojiOptions object](https://github.com/twitter/twemoji) as second parameter.

## TextareaParser

### replaceEmojiWithAltAttribute(text: string)

This function replace all emoji img tags in the text parameter with its respective alt attributes.

### unescapeHtml(text: string)

This function unescape HTML characters in the text parameter.

### escapeHTML(text: string)

This function escape HTML characters in the text parameter.

