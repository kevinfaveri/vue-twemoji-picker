---
title: 'Getting Started'
---

# Getting Started

## Installation

For installing Vue Twemoji Picker dependency in your project use:

``` sh
npm install @kevinfaguiar/vue-twemoji-picker
// OR
yarn add @kevinfaguiar/vue-twemoji-picker
```

## Using TwemojiPicker

This component, as explained previously, is only the emoji picker so it doesn't render emojis on its own. You need to pass as a prop to it the emoji dataset and use its events like @emojiUnicodeAdded to catch user interactions. [Pre-compacted emoji datasets are available](/docs/emoji-datasets) for use with this library.

Change {LANG} for one of the supported [locales](/docs/localization):

``` html
<template>
  <twemoji-picker
    :emojiData="emojiDataAll"
    :emojiGroups="emojiGroups"
    :skinsSelection="false"
    :searchEmojisFeat="true"
    searchEmojiPlaceholder="Search here."
    searchEmojiNotFound="Emojis not found."
    isLoadingLabel="Loading..."
  ></twemoji-picker>
</template>

<script>
  import {
    TwemojiPicker
  } from '@kevinfaguiar/vue-twemoji-picker';
  import EmojiAllData from '@kevinfaguiar/vue-twemoji-picker/emoji-data/{LANG}/emoji-all-groups.json';
  import EmojiDataAnimalsNature from '@kevinfaguiar/vue-twemoji-picker/emoji-data/{LANG}/emoji-group-animals-nature.json';
  import EmojiDataFoodDrink from '@kevinfaguiar/vue-twemoji-picker/emoji-data/{LANG}/emoji-group-food-drink.json';
  import EmojiGroups from '@kevinfaguiar/vue-twemoji-picker/emoji-data/emoji-groups.json';
  export default {
    name: 'App',
    components: {
        'twemoji-picker': TwemojiPicker
    },
    computed: {
      emojiDataAll() {
        return EmojiAllData;
      },
      emojiGroups() {
        return EmojiGroups;
      }
    }
  }
</script>
```

For the component API entire documentation, [click here](/docs/twemoji-picker-api).

## Using TwemojiTextarea

This component is the one used in the demo: is a textarea with a Twemoji Picker component integrated so you can easily prototype and test the rendering of the selected emojis into your app.

Change {LANG} for one of the supported [locales](/docs/localization):

``` html
<template>
  <twemoji-textarea 
    :emojiData="emojiDataAll" 
    :emojiGroups="emojiGroups" 
    @enterKey="onEnterKey">
  </twemoji-textarea>
</template>

<script>
  import {
    TwemojiTextarea
  } from '@kevinfaguiar/vue-twemoji-picker';
  import EmojiAllData from '@kevinfaguiar/vue-twemoji-picker/emoji-data/{LANG}/emoji-all-groups.json';
  import EmojiGroups from '@kevinfaguiar/vue-twemoji-picker/emoji-data/emoji-groups.json';
  export default {
    name: 'App',
    components: {
      'twemoji-textarea': TwemojiTextarea
    },
    computed: {
      emojiDataAll() {
          return EmojiAllData;
      },
      emojiGroups() {
          return EmojiGroups;
      }
    },
    methods: {
      onEnterKey(e) {
        console.log("ClickedEnter", e);
      }
    }
  }
</script>
```

For the component API entire documentation, [click here](/docs/twemoji-textarea-api).

## Using UMD/IIFE Builds
- Version: 5.4.0 onwards

This project exports UMD/IIFE builds which can be used in any HTML/JS project. Below is an example:

<ClientOnly>
  <iframe
     src="https://codesandbox.io/embed/angry-shadow-we3co?autoresize=1&fontsize=14&hidenavigation=1&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-twemoji-picker-vanilla-example"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
</ClientOnly>
