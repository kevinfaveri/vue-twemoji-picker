export const DEFAULT_PICKER_WIDTH = 250;

export default {
  emojiPickerDisabled: {
    default: false,
    type: Boolean
  },
  pickerWidth: {
    default: DEFAULT_PICKER_WIDTH,
    type: [Number, String],
    validator: function(value: string) {
      if (typeof value === 'string' && !value.startsWith('#')) {
        console.warn(
          `The value you entered is invalid: should be a number or a ID tag beginning with "#". 
          Using default value of 250px.`
        );
      }
      return true;
    }
  },
  pickerHeight: {
    default: 150,
    type: Number
  },
  pickerPlacement: {
    default: 'top-start',
    type: String,
    validator: function(value: string) {
      if (
        ![
          // TOP
          'top-start',
          'top',
          'top-end',
          // BOTTOM
          'bottom-start',
          'bottom',
          'bottom-right',
          // LEFT
          'left-start',
          'left',
          'left-end',
          // RIGHT
          'right-start',
          'right',
          'right-end'
        ].some((elem) => elem === value)
      ) {
        console.error(
          'The value entered for the prop "pickerPlacement" is invalid. ' +
            `Valid values: 
              'top-start',
              'top',
              'top-end',
              'bottom-start',
              'bottom',
              'bottom-right',
              'left-start',
              'left',
              'left-end',
              'right-start',
              'right',
              'right-end'
            `
        );
      }
      return true;
    }
  },
  pickerArrowEnabled: {
    default: true,
    type: Boolean
  },
  pickerAutoflip: {
    default: true,
    type: Boolean
  },
  pickerCloseOnClickaway: {
    default: true,
    type: Boolean
  },
  triggerType: {
    default: 'click',
    type: String,
    validator: function(value: string) {
      if (value !== 'click' && value !== 'hover') {
        console.error(
          'The value entered for the prop "triggerType" is invalid. ' +
            'Valid values: "click" and "hover".'
        );
      }
      return true;
    }
  },
  emojiData: {
    required: true,
    type: Array,
    validator: function(value: string) {
      if (!value || value.length === 0) {
        console.error(
          'The value entered for the prop "emojiData" is invalid. ' +
            `Should have a length greater than 0.`
        );
      }
      return true;
    }
  },
  emojiGroups: {
    required: true,
    type: Array
  },
  skinsSelection: {
    default: false,
    type: Boolean
  },
  recentEmojisFeat: {
    default: false,
    type: Boolean
  },
  recentEmojisStorage: {
    default: 'none',
    type: String,
    validator: function(value: string) {
      if (value !== 'local' && value !== 'session' && value !== 'none') {
        console.error(
          'The value entered for the prop "recentEmojisStorage" is invalid. ' +
            'Valid values: "local", "session" and "none".'
        );
      }
      return true;
    }
  },
  recentEmojiStorageName: {
    default: 'vue-recent-twemojis',
    type: String
  },
  recentEmojiLimit: {
    default: 12,
    type: Number
  },
  searchEmojisFeat: {
    default: false,
    type: Boolean
  },
  searchEmojiPlaceholder: {
    default: 'Search emojis.',
    type: String
  },
  isLoadingLabel: {
    default: 'Loading...',
    type: String
  },
  searchEmojiNotFound: {
    default: 'No emojis found.',
    type: String
  },
  twemojiPath: {
    default: 'https://twemoji.maxcdn.com/2/',
    type: String
  },
  twemojiExtension: {
    default: '.png',
    type: String,
    validator: function(value: string) {
      const bolValid =
        ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;
      if (bolValid === false) {
        console.error(
          'The value entered for the prop "twemojiPath" is invalid. ' +
            'Valid values: ".png", ".svg", ".jpg", ".jpeg", ".ico".'
        );
      }
      return true;
    }
  },
  twemojiFolder: {
    default: '72x72',
    type: String
  },
  randomEmojiArray: {
    default: () => [
      '😀',
      '😃',
      '😄',
      '😁',
      '😆',
      '😅',
      '🤣',
      '😂',
      '🙂',
      '🙃',
      '😉',
      '😊',
      '🥴',
      '😵',
      '🤯',
      '🤠',
      '🥳',
      '😎',
      '🤓',
      '🧐'
    ],
    type: Array,
    validator: function(value: string) {
      if (value && value.length === 0) {
        console.error('The Array must have a length of one or more.');
      }
      return true;
    },
  },
  pickerPaddingOffset: {
    default: 5,
    type: Number,
  },
}