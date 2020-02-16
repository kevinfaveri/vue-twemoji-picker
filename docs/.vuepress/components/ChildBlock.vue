<template>
  <div class="child" v-if="parsedTitle && parsedContent">
    <h2 id="title" v-html="parsedTitle" />
    <p id="content" v-html="parsedContent"/>
  </div>
</template>

<style>
.child {
  flex: 0 0 32%;
  margin: 3px;
  min-height: 150px;
}

@media only screen and (max-width: 768px) and (min-width: 320px){
  .child {
    flex: 0 0 100%;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 768px){
  .child {
    flex: 0 0 45%;
  }
}

.child > * > .emoji {
  height: 24px;
}

.child > * {
  border: none;
  text-align: center;
}

.child > #title {
  margin-bottom: 10px;
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
  data() {
    return {
      parsedTitle: null,
      parsedContent: null
    }
  },
  mounted() {
    this.parsedTitle = Twemoji.parse(this.title);
    this.parsedContent = Twemoji.parse(this.content);
  }
}
</script>