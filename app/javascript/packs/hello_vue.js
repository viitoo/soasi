 import Vue from 'vue/dist/vue.esm'
 import App from '../app.vue'
 import VueGoodTable from 'vue-good-table'
 import VueResource from 'vue-resource'
 //import TurbolinksAdapter from 'vue-turbolinks'

 Vue.use(VueResource)
 Vue.use(VueGoodTable)
 //Vue.use(TurbolinksAdapter)

//function destroyVue() {
//  this.destroy()
//  document.removeEventListener('turbolinks:before-cache', destroyVue)
//}
document.addEventListener('DOMContentLoaded', () => {
//document.addEventListener('turbolinks:load', () => {
    var element = document.getElementById("hello")
    if (element != null) { }
    var app =  new Vue({
    el: element,
    data: {
      empresas: [],
      empresa: {
        nombre: '',
        ruc: '',
        telefono: '',
        email: '',
      }
    },
    components: { App },

  //  beforeMount: function() {
  //    this.$originalElement = this.$el.outerHTML
  //    document.addEventListener('turbolinks:before-cache', destroyVue.bind(this.$originalElement))
  //  },
 //   destroyed: function() {
 //           this.$el.outerHTML = this.$originalElement
 //       },



  })
})