---
title: 'Changelog'
---

# Changelog

## 5.5.2
- Fixed enter bug onEnterKey in TwemojiTextarea

## 5.5.1
- pickerPlacement default is now 'top-start'

## 5.5.0

- Major visual rework
- Some code refactoring for spreading of props for TwemojiTextarea
- Style has changed to stylus
- Disabled props in components (textarea and picker) now have specific names: emojiPickerDisabled and textareaDisabled
- componentColor prop in TwemojiTextarea now accepts only a string which represents a valid CSS color
- pickerCloseOnClickaway prop added to TwemojiPicker
- pickerWidth prop for TwemojiTextarea and TwemojiPicker now accepts an DOM element ID string for mimicking the El width.
- Emoji skins now appear in a popup and are triggered by a "click and hold" interaction

## 5.4.1

- Fix autofocus bug in Twemoji Textarea

## 5.4.0

- Rollup upgrade to v2 + fixed some bugs in UMD builds

## 5.3.1

- Project deps update

## 5.2.4

- Added the "maxlength" prop to TwemojiTextarea

## 5.2.3

- Added the "placeholder" prop to TwemojiTextarea

## 5.2.2

- Added the "randomEmojiArray" prop to TwemojiPicker

## 5.2.1

- Added a Vue slot which enables the usage of TwemojiPicker as a headless component

## 5.2.0

- The popover dependency has been updated (vue-tooltip -> popper.js v2) for achieving a better bundle size

## 5.1.1

- EmojiService and TextareaParser added to the default export

## 5.1.0

- Documentation rewrite. Made with VuePress

## 5.0.5

- Some minor refac at deprecated docs

## 5.0.4

- Services [EmojiService and TextareaParser] are now available when importing from '@kevinfaguiar/vue-twemoji-picker'

## 5.0.3

- Fix README docs endpoint

## 5.0.2

- Fix new docs endpoint and deprecated notice to old package

## 5.0.1

- Breaking bugs fixes in some emoji list parsing behaviours

## 5.0.0

- Major new version with a codebase rewrite in Typescript, new repo name, but no API breaking changes!!!

## < 5.0.0

- Changelog was not documented before major version 5.0.0, sorry.