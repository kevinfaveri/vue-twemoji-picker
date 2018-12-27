import { CoolTextArea, CoolPicker } from '../../../index';
import EmojiDataAll from '../../emoji-data/en/emoji-all-groups.json';
import EmojiDataAnimalsNature from '../../emoji-data/en/emoji-group-animals-nature.json';
import EmojiDataFoodDrink from '../../emoji-data/en/emoji-group-food-drink.json';
import EmojiDataTravelPlaces from '../../emoji-data/en/emoji-group-travel-places.json';
import EmojiDataActivities from '../../emoji-data/en/emoji-group-activities.json';
import EmojiDataObjects from '../../emoji-data/en/emoji-group-objects.json';
import EmojiDataSymbols from '../../emoji-data/en/emoji-group-symbols.json';
import EmojiDataFlags from '../../emoji-data/en/emoji-group-flags.json';
import EmojiGroups from '../../emoji-data/emoji-groups.json';
import EmojiService from '../../services/emoji-service';
import TextareaParser from '../../services/textarea-parser';
import { Slide } from 'vue-burger-menu';

export default {
  name: 'App',
  components: { 
    'cooltextarea': CoolTextArea, 
    'coolpicker': CoolPicker,
    'slide': Slide 
},
  data() {
    return {
      content: '',
      isSlideOpen: false,
    }
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
    createElementFromHTML(htmlString) {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      return div.firstChild; 
    },
    onEnterKey() {
      if (this.content.length === 0) {
        return;
      }

      const docElement = document.getElementById('messages-sent');
     
      let formattedContent = TextareaParser.escapeHTML(this.content);
      formattedContent = EmojiService.getEmojiImgFromUnicode(formattedContent);
      docElement.appendChild(this.createElementFromHTML(
        '<div class="code-block-cream text-wrap margin-bottom padding-all text-break">' 
        + formattedContent + 
        '</div>')
      );
      if (docElement.childElementCount > 6) {
        docElement.removeChild(docElement.childNodes[1]);
      }
      this.$refs.cooltextareaSend.cleanText();
    },
  }
};
