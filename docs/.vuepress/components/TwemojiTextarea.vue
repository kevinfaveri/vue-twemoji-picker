<template>
  <div style="margin: 5% 0;">
    <twemoji-textarea 
      :emojiData="emojiDataAll" 
      :emojiGroups="emojiGroups"
      :skinsSelection="true"
      :enableSendBtn="true"
      :recentEmojisFeat="true"
      :searchEmojisFeat="true"
      :maxlength="100"
      >
    </twemoji-textarea>
  </div>
</template>

<script>
import {
  TwemojiTextarea
} from '@kevinfaguiar/vue-twemoji-picker';
import EmojiAllData from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-all-groups.json';
import EmojiGroups from '@kevinfaguiar/vue-twemoji-picker/emoji-data/emoji-groups.json';

export default {
  name: 'TwemojiTextarea',
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
  data() {
    return {
      showTwemojiTextarea: false,
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  }
}
</script>