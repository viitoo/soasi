 import Vue from 'vue/dist/vue.esm'
 import App from '../app.vue'
 import VueGoodTable from 'vue-good-table'
 import VueResource from 'vue-resource'

 Vue.use(VueResource)
 Vue.use(VueGoodTable)

document.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("hello")
    if (element != null) { }
    let app =  new Vue({
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



  })
})