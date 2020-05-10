<template>
  <div id="app">
    <div id="test-picker">
      <twemoji-picker
        :emojiData="emojiDataAll"
        :emojiGroups="emojiGroups"
        pickerPlacement="left"
        ref="picker"
        :emojiPickerDisabled="emojiPickerDisabled"
        :pickerArrowEnabled="false"
        pickerWidth="#buttonson"
        :pickerPaddingOffset="-10"
      >
      </twemoji-picker>
      <button @click="onClickTest" id="buttonson">Working Test</button>
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
        placeholder="Textarea Placeholders"
        :maxlength="100"
        @isContentOverflowed="isContentOverflowed"
        ref="twemojiTextareaRef"
        :pickerArrowEnabled="true"
        idTextarea="idTextarea"
        pickerWidth="#idTextarea"
        :randomEmojiArray="randomEmojiArray"
        :emojiPickerDisabled="emojiPickerDisabled"
        :textareaDisabled="textareaDisabled"
      >
      </twemoji-textarea>
      <button @click="onClickTest">Working Test</button>
    </div>
    <div>
      <twemoji-textarea
        id="twemojison"
        :emojiData="emojiDataAll"
        :emojiGroups="emojiGroups"
        :skinsSelection="true"
        :enableSendBtn="true"
        :recentEmojisFeat="true"
        :searchEmojisFeat="true"
        :maxlength="100"
        :pickerArrowEnabled="false"
        idTextarea="idTextarea"
        pickerWidth="#idTextarea"
        initialContent="TEST BUG CONTENT"
        :pickerPaddingOffset="15"
      >
      </twemoji-textarea>
    </div>
  </div>
</template>
<style lang="css">
@import '../assets/simple-grid.css';

body {
  background-color: #ffffff;
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

#test-picker {
  padding-left: 500px;
}

#twemojison {
  padding-top: 15px;
}
</style>
<script lang="ts">
// const TwemojiPicker = (window as any).VueTwemojiPicker.TwemojiPicker;
// const TwemojiTextarea = (window as any).VueTwemojiPicker.TwemojiTextarea;

import Vue from 'vue';
import { TwemojiPicker, TwemojiTextarea } from '../wrapper';
import EmojiDataAll from '../../emoji-data/en/emoji-all-groups.json';
import EmojiDataAnimalsNature from '../../emoji-data/en/emoji-group-animals-nature.json';
import EmojiDataFoodDrink from '../../emoji-data/en/emoji-group-food-drink.json';
import EmojiDataTravelPlaces from '../../emoji-data/en/emoji-group-travel-places.json';
import EmojiDataActivities from '../../emoji-data/en/emoji-group-activities.json';
import EmojiDataObjects from '../../emoji-data/en/emoji-group-objects.json';
import EmojiDataSymbols from '../../emoji-data/en/emoji-group-symbols.json';
import EmojiDataFlags from '../../emoji-data/en/emoji-group-flags.json';
import EmojiGroups from '../../emoji-data/emoji-groups.json';

export default Vue.extend({
  name: 'App',

  components: {
    'twemoji-textarea': TwemojiTextarea,
    'twemoji-picker': TwemojiPicker,
  },

  data() {
    return {
      content: '',
      randomEmojiArray: ['😀'],
      emojiPickerDisabled: false,
      textareaDisabled: false,
    };
  },
  mounted() {
    this.$watch(
      () => {
        return this.$refs.twemojiTextareaRef.twemojiPicker.isPickerOpen;
      },
      (value: boolean) => {
        this.randomEmojiArray = value ? ['😄'] : ['🙂'];
      }
    );
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
    },
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
    },
    onClickTest() {
      this.emojiPickerDisabled = !this.emojiPickerDisabled;
      this.textareaDisabled = !this.textareaDisabled;
    },
    testChangeIsPickerOpen1() {
      this.$refs.picker.isPickerOpen = !this.$refs.picker.isPickerOpen;
    },
    testChangeIsPickerOpen2() {
      this.$refs.twemojiTextareaRef.twemojiPicker.isPickerOpen = !this.$refs
        .twemojiTextareaRef.twemojiPicker.isPickerOpen;
    },
  },
});
</script>
