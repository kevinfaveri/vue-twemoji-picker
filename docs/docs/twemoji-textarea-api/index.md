---
title: 'Twemoji Textarea API'
---

# Twemoji Textarea API

## Props

- This component inherits all Twemoji Picker props **except disabled** which for clarity issues has a new name as seen below. You can check them [here](/docs/twemoji-picker-api#props).

### content
- Type: ``string``
- Default: ``''``

This is the content variable which will be the output of the textarea with the emoji art img tags converted to its equivalent Unicode character.

### enableSendBtn
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the send button is enabled.

### disableEmojiPicker
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the emoji picker is enabled.

### disabled
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the textarea is enabled.

### componentColor
- Type: ``string``
- Default: ``'cream'``
- Valid Props: ``['cream', 'cherry', 'forest', 'ocean', 'sun', 'transparent']``

Define the component color style.

## Events

- This component inherits all Twemoji Picker events. You can check them [here](/docs/twemoji-picker-api#events).

### contentChanged

This event fires everytime the textarea content is updated.

### enterKey
- Parameter | Type : ``event | KeyboardEvent``

This event fires everytime the enter key is pressed or the send button is clicked, so that you can define what action is to be performed based on the event.

You can even prevent the line wrapping when pressing enter key by passing down for the component a method like that:
```js
onEnterKey(event) {
  event.stopPropagation();
  event.preventDefault();
}
```

## Ref Useful Methods

### addText
- Parameter | Type : ``text | string``

This method adds a text to the textarea. The text parameter will then be sanitized and emojis Unicodes converted to emoji IMG arts from Twemoji.

### addTextBlur
- Parameter | Type : ``text | string``

This method adds a text to the textarea. The text parameter will then be sanitized and emojis Unicodes converted to emoji IMG arts from Twemoji. It is the same as addText(text) method, but this one doesn't trigger smartphone keyboard.

### cleanText

This method cleans the textarea.

## Styling

The component doesn't enforce CSS rules using `!important` so you can easily overwrite it default style.