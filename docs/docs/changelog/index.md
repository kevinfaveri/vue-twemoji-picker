---
title: 'Changelog'
---

# Changelog

## 5.7.4
- Minor style bugfix for components

## 5.7.3
- Style update for TwemojiPicker

## 5.7.2

- Added a Vue slot which enables the usage of TwemojiPicker as a headless component when using TwemojiTextarea component

## 5.7.1
- Fixes ESM build

## 5.7.0
- Emoji Dataset updated for the 13.0 spec from 2020 🚀
- Minor bug for emoji search bar fixed

## 5.6.5
- 'pickerPaddingOffset' has been reworked and now accepts a Number that represents pixels.

## 5.6.4
- 'pickerWidth' now issues a warning if prop is invalid but then procceds to use default value.

## 5.6.3
- Content length calc now uses 'twitter-text' NPM package for better handling of emoji unicodes.

## 5.6.2
- 'initialContent' prop added to TwemojiTextarea

## 5.6.1
- Tweaks TwemojiPicker positioning

## 5.6.0
- Update deps and build pipeline

## 5.5.5
- when randomEmojiArray is changed it now triggers a component update
- when isPickerOpen (TwemojiPicker data) is changed it now triggers a component update
- setting emojiPickerDisabled to true will now set isPickerOpen to false

## 5.5.4
- Adds contentChangedHtml event to TwemojiTextarea

## 5.5.3
- Fixed bug when tries to hide search bar when the feat is not enabled

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