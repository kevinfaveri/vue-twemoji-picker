---
title: 'Twemoji Picker API'
---

## Props

### disabled
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the component is disabled.

### pickerWidth
- Type: ``250``
- Default: ``number``

Define the emoji picker width (in pixels).

### pickerHeight
- Type: ``number``
- Default: ``200``

Define the emoji picker initial height and max height (in pixels).

### appendToBody
- Type: ``boolean``
- Default: ``false``

Define if the emoji picker will bind to body if true; or to parent element if false.

### triggerType
- Type: ``string``
- Default: ``'click'``
- Valid Props: ``['click','hover']``

Define the emoji picker popup trigger type.

### emojiData
- Type: ``array of EmojiPack object``
- Default: ``[]``

This is the array of emojis which is delivered to the component... [Pre-compacted emoji datasets per category are also available in this library](/docs/emoji-datasets).

### emojiGroups
- Type: ``array of EmojiGroup object``
- Default: ``[]``

This is the array of emoji groups which is delivered to the component... [Pre-compacted emoji group dataset is also available in this library](/docs/emoji-datasets).

### skinsSelection
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the skins feature is enabled.

### recentEmojisFeat
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the recent emojis feature is enabled.

### recentEmojisStorage
- Type: ``string``
- Default: ``'none'``
- Valid Props: ``['none','session','local']``

Define the type of storage for recent emojis feature.
``Explanation:``
local = LocalStorage; session = SessionStorage; none = storage disabled.

### recentEmojiStorageName
- Type: ``string``
- Default: ``'vue-recent-twemojis'``

Define the name of the storage object, if enabled.

### recentEmojiLimit
- Type: ``number``
- Default: ``12``

Define the maximum amount of recent emojis.

### searchEmojisFeat
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the search emojis feature is enabled.

### searchEmojiPlaceholder
- Type: ``string``
- Default: ``'Search emojis.'``

Defines the placeholder for the search input box.

### searchEmojiNotFound
- Type: ``string``
- Default: ``'No emojis found.'``

Define the message when the search returns no results.

### isLoadingLabel
- Type: ``string``
- Default: ``'Loading...'``

Defines the loading label.


### twemojiPath
- Type: ``string``
- Default: ``'https://twemoji.maxcdn.com/2/'``

Defines the CDN where the Twemoji official library will request the emoji arts.

### twemojiExtension
- Type: ``string``
- Default: ``'.png'``
- Valid Props: ``['.png', '.svg', '.jpg', '.jpeg', '.ico']``

Defines the emoji arts extension.

### twemojiFolder
- Type: ``string``
- Default: ``'72x72'``

Defines the emoji arts folder where the Twemoji official library will request.

## Events

### emojiUnicodeAdded
- Parameter | Type : ``emojiUnicode | string``

This event fires everytime the user selects an emoji in the picker.

### emojiImgAdded
- Parameter | Type : ``emojiImgTag | string``

This event fires everytime the user selects an emoji in the picker.