import Vue from 'vue';
import Docs from './components/Docs.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Docs)
}).$mount('#app');
