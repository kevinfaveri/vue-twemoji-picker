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

### emojiPickerDisabled
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the emoji picker is enabled.

### textareaDisabled
- Type: ``boolean``
- Default: ``false``

The value of this prop represents whether the textarea is enabled.

### componentColor
- Type: ``string``
- Default: ``'#EBEBEB'``
- Valid Props: ``Any CSS valid color.``

Define the component color style.

### placeholder
- Version: 5.2.3 onwards
- Type: ``string``
- Default: ``''``

Define the textarea placeholder.

### maxlength
- Version: 5.2.4 onwards
- Type: ``number``
- Default: ``null``

Define the textarea maxlength. If set to null has no default maxlength. If set to any number the textarea will automatically expand itself to show a character count.

## Events

- This component inherits all Twemoji Picker events. You can check them [here](/docs/twemoji-picker-api#events).

### contentChanged

This event fires everytime the textarea content is updated.

### actualContentLengthChanged
- Parameter | Type : ``actualLength | number``

This event fires everytime the textarea content is updated. Has a parameter which indicates the length of the content (which is in fact not a simple content.length) because some emoji unicode in Javascript are sometimes counted as more than 1 in length value.

```js
actualContentLengthChanged(actualLength) {
  console.log('actualLength', actualLength);
}
```

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

### isContentOverflowed
- Parameter | Type : ``isContentOverflowed | boolean``

This event fires everytime the enter key is pressed or the send button is clicked, so that you can define what action is to be performed based on the content being overflowed or not (content is considered overflowed when its actualContentLength greater than its [maxlength](/docs/twemoji-picker-api#maxlength)).

You can then prevent the submitting of the textarea onEnterKeypress by using this event:
```js
isContentOverflowed(isContentOverflowed) {
  if(isContentOverflowed) // set variable which will prevent submiting of textarea
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

The component doesn't enforce CSS rules using `!important` so you can easily overwrite its default style.