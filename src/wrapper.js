import CoolTextAreaComponent from './components/cooltextarea/cooltextarea.vue';
import CoolPickerComponent from './components/coolpicker/coolpicker.vue';

export const CoolTextArea = CoolTextAreaComponent;
export const CoolPicker = CoolPickerComponent;

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('CoolTextArea', CoolTextArea);
  Vue.component('CoolPicker', CoolPicker);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
