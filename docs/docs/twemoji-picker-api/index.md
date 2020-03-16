---
title: 'Twemoji Picker API'
---

# Twemoji Picker API

## Props

### emojiPickerDisabled
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the component is disabled.

### pickerWidth
- Type: ``number | string``
- Default: ``250``

Define the emoji picker width (in number of pixels) OR receives an DOM element ID string beginning with "#" and then mimicks its width.

### pickerHeight
- Type: ``number``
- Default: ``150``

Define the emoji picker initial height and max height (in pixels).

### pickerPlacement
- Type: ``string``
- Default ``top-start``
- Valid Props: ``['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-right', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end']``

Define the emoji picker placement position relative to the ref element (like a button).

### pickerArrowEnabled
- Type: ``boolean``
- Default ``true``

Define whether the emoji picker should render a reference arrow.

## pickerAutoflip
- Type: ``boolean``
- Default ``true``

Define the picker will attempt to flip to the opposite side if it does not fit at the pickerPlacement.

## pickerCloseOnClickaway
- Type: ``boolean``
- Default ``true``

Define the picker will close itself when clicking outside its boundaries.

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

### randomEmojiArray
- Version: 5.2.2 onwards
- Type: ``array of emoji Unicode``
- Default: ``['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','🥴','😵','🤯','🤠','🥳','😎','🤓','🧐']``
- Validation: ``must have a length of one or more``

Defines the array of emoji Unicode which the picker button will randomize into onHover. This prop can be used to disable picker button emoji randomize by providing an array of length equal to 1. Emoji unicodes are available here: https://unicode.org/emoji/charts/full-emoji-list.html

## Events

### emojiUnicodeAdded
- Parameter | Type : ``emojiUnicode | string``

This event fires everytime the user selects an emoji in the picker.

### emojiImgAdded
- Parameter | Type : ``emojiImgTag | string``

This event fires everytime the user selects an emoji in the picker.

## Slots

### twemoji-picker-button
- Version: 5.2.1 onwards
- Default: Default style featured in the [Demo](/docs/#demo).

You can implement your own button, span, div, whatever so Twemoji Picker can act like a headless component.
The HTMLElement provided for the slot will be DOM element which will trigger the popup opening fn, like so:

```html
<twemoji-picker
  :emojiData="emojiDataAll"
  :emojiGroups="emojiGroups"
>
  <template v-slot:twemoji-picker-button
    >
    <button>OMG A HEADLESS COMPONENT</button>
  </template>
</twemoji-picker>
```

## Styling

The component doesn't enforce CSS rules using `!important` so you can easily overwrite its default style.