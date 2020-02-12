---
title: 'Getting Started'
---

# Installation

For installing Vue Twemoji Picker dependency in your project use:

``` sh
npm install @kevinfaguiar/vue-twemoji-picker
// OR
yarn add @kevinfaguiar/vue-twemoji-picker
```

## Using TwemojiPicker

This component, as explained previously, is only the emoji picker so it doesn't render emojis on its own. You need to pass as prop to it the emoji dataset and use its events like @emojiUnicodeAdded to catch user interactions.

``` js
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
```

``` html
<twemoji-picker
  :emojiData="emojiDataAll"
  :emojiGroups="emojiGroups"
  :skinsSelection="false"
  :searchEmojisFeat="true"
  :appendToBody="true"
  searchEmojiPlaceholder="Search here."
  searchEmojiNotFound="Emojis not found."
  isLoadingLabel="Loading..."
></twemoji-picker>
```

## Using TwemojiTextarea

This component is the one used in the demo: is a textarea with a Twemoji Picker component integrated so you can easily integrate and test the rendering of the selected emojis into your app.

``` js
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
```

``` html
<twemoji-textarea 
  :emojiData="emojiDataAll" 
  :emojiGroups="emojiGroups" 
  @enterKey="onEnterKey">
</twemoji-textarea>
```
