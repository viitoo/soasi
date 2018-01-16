import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

new Vue({
  el: '#select',
  data: {
    selected: null,
    options: ["1","3","4"]
  }
})