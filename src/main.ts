import Vue from 'vue';
import Sandbox from './components/Sandbox.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Sandbox)
}).$mount('#app');
