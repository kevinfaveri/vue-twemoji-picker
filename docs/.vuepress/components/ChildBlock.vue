<template>
  <div class="child" v-if="parsedTitle && parsedContent">
    <h2 id="title" v-html="parsedTitle" />
    <p id="content" v-html="parsedContent"/>
  </div>
</template>

<style>
.child {
  flex: 1 0 30%;
  margin: 5px;
  min-height: 150px;
}

.child > * > .emoji {
  height: 24px;
}

.child > * {
  border: none;
  text-align: center;
}
</style>

<script>
import Twemoji from 'twemoji';

export default {
  name: 'ChildBlock',
  props: {
    title: {
      default: '',
      type: String
    },
    content: {
      default: '',
      type: String
    }
  },
  data: () => ({
    parsedTitle: null,
    parsedContent: null
  }),
  mounted() {
    this.parsedTitle = Twemoji.parse(this.title);
    this.parsedContent = Twemoji.parse(this.content);
  }
}
</script>