// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import 'es6-promise/auto'; // for Promise polyfill
import { getField, updateField } from 'vuex-map-fields';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';



Vue.use(Vuex);
Vue.use(SuiVue);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
