import EmojiGroup from '@/interfaces/EmojiGroup';
import EmojiPack from '@/interfaces/EmojiPack';

export default {
  emojiPickerDisabled: {
    default: false,
    type: Boolean as () => boolean
  },
  pickerWidth: {
    default: 250,
    type: [Number as () => number, String as () => string],
    validator: function(value: string) {
      if (typeof value === 'string' && !value.startsWith('#')) {
        console.error(
          'The value you entered is invalid: should be a number or a ID tag beginning with "#"'
        );
      }
      return true;
    }
  },
  pickerHeight: {
    default: 150,
    type: Number as () => number
  },
  pickerPlacement: {
    default: 'top-start',
    type: String as () => string,
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
    type: Boolean as () => boolean
  },
  pickerAutoflip: {
    default: true,
    type: Boolean as () => boolean
  },
  pickerCloseOnClickaway: {
    default: true,
    type: Boolean as () => boolean
  },
  triggerType: {
    default: 'click',
    type: String as () => string,
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
    type: Array as () => Array<EmojiPack>,
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
    type: Array as () => Array<EmojiGroup>
  },
  skinsSelection: {
    default: false,
    type: Boolean as () => boolean
  },
  recentEmojisFeat: {
    default: false,
    type: Boolean as () => boolean
  },
  recentEmojisStorage: {
    default: 'none',
    type: String as () => string,
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
    type: String as () => string
  },
  recentEmojiLimit: {
    default: 12,
    type: Number as () => number
  },
  searchEmojisFeat: {
    default: false,
    type: Boolean as () => boolean
  },
  searchEmojiPlaceholder: {
    default: 'Search emojis.',
    type: String as () => string
  },
  isLoadingLabel: {
    default: 'Loading...',
    type: String as () => string
  },
  searchEmojiNotFound: {
    default: 'No emojis found.',
    type: String as () => string
  },
  twemojiPath: {
    default: 'https://twemoji.maxcdn.com/2/',
    type: String as () => string
  },
  twemojiExtension: {
    default: '.png',
    type: String as () => string,
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
    type: String as () => string
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
    type: Array as () => Array<string>,
    validator: function(value: string) {
      if (value && value.length === 0) {
        console.error('The Array must have a length of one or more.');
      }
      return true;
    }
  }
}