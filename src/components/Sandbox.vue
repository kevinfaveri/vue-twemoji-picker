<template>
  <div id="app">
    <div>
      <twemoji-picker
        :emojiData="emojiDataAll"
        :emojiGroups="emojiGroups"
        pickerPlacement="top-end"
      >
      </twemoji-picker>
    </div>
    <div>
      <twemoji-textarea
        :pickerAutoflip="false"
        :content.sync="content"
        :emojiData="emojiDataAll"
        :emojiGroups="emojiGroups"
        :skinsSelection="true"
        :enableSendBtn="true"
        @enterKey="onEnterKey"
        @actualContentLengthChanged="actualContentLengthChanged"
        :recentEmojisFeat="true"
        recentEmojisStorage="none"
        :searchEmojisFeat="true"
        placeholder="Textarea Placeholder"
        :maxlength="100"
        @isContentOverflowed="isContentOverflowed"
        ref="twemojiTextareaRef"
        :pickerArrowEnabled="true"
        idTextarea="idTextarea"
        pickerWidth="#idTextarea"
      ></twemoji-textarea>
    </div>
    <div>
      <twemoji-textarea
        :emojiData="emojiDataAll"
        :emojiGroups="emojiGroups"
        :skinsSelection="true"
        :enableSendBtn="true"
        :recentEmojisFeat="true"
        :searchEmojisFeat="true"
        :maxlength="100"
        idTextarea="idTextarea"
        pickerWidth="#idTextarea"
      >
      </twemoji-textarea>
    </div>
  </div>
</template>
<style lang="css">
@import '../assets/simple-grid.css';

body {
  background-color: #fafafa;
}

a {
  text-decoration: none;
  color: #05adad;
}

a:hover {
  color: teal;
}

#app {
  padding: 20% 10%;
}

#app > div {
  margin: 100vh 0;
}
</style>
<script lang="ts">
// const TwemojiPicker = (window as any).VueTwemojiPicker.TwemojiPicker;
// const TwemojiTextarea = (window as any).VueTwemojiPicker.TwemojiTextarea;

import Vue from 'vue';
import { TwemojiPicker, TwemojiTextarea } from '../wrapper';
import EmojiDataAll from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-all-groups.json';
import EmojiDataAnimalsNature from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-animals-nature.json';
import EmojiDataFoodDrink from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-food-drink.json';
import EmojiDataTravelPlaces from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-travel-places.json';
import EmojiDataActivities from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-activities.json';
import EmojiDataObjects from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-objects.json';
import EmojiDataSymbols from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-symbols.json';
import EmojiDataFlags from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-group-flags.json';
import EmojiGroups from '@kevinfaguiar/vue-twemoji-picker/emoji-data/emoji-groups.json';

export default Vue.extend({
  name: 'App',

  components: {
    'twemoji-textarea': TwemojiTextarea,
    'twemoji-picker': TwemojiPicker
  },

  data() {
    return {
      content: '',
      isSlideOpen: false
    };
  },

  computed: {
    emojiDataAll() {
      return EmojiDataAll;
    },
    emojiDataOneCollection() {
      const emojiData = [];
      emojiData.push(EmojiDataActivities);
      return emojiData;
    },
    emojiDataTwoCollections() {
      const emojiData = [];
      emojiData.push(EmojiDataAnimalsNature);
      emojiData.push(EmojiDataFlags);
      return emojiData;
    },
    emojiDataThreeCollections() {
      const emojiData = [];
      emojiData.push(EmojiDataFlags);
      emojiData.push(EmojiDataFoodDrink);
      emojiData.push(EmojiDataObjects);
      return emojiData;
    },
    emojiDataFourCollections() {
      const emojiData = [];
      emojiData.push(EmojiDataObjects);
      emojiData.push(EmojiDataSymbols);
      emojiData.push(EmojiDataTravelPlaces);
      emojiData.push(EmojiDataActivities);
      return emojiData;
    },
    emojiGroups() {
      return EmojiGroups;
    }
  },

  methods: {
    createElementFromHTML(htmlString: string): ChildNode | null {
      const div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      return div.firstChild;
    },
    onEnterKey(event: MouseEvent): void {
      event.stopPropagation();
      event.preventDefault();
    },
    actualContentLengthChanged(actualLength: number): void {
      console.log('actualLength', actualLength);
    },
    isContentOverflowed(isContentOverflowed: boolean) {
      console.log('isContentOverflowed', isContentOverflowed);
    }
  }
});
</script>
