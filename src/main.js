import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import store from './store';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale('zh_TW');

const app = createApp(App).use(store).use(router);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
