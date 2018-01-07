import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'
import Notificacion from '../notificacion.vue'
Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', () => {
      var element = document.getElementById("notificacion")
      if (element != null) { }

 new Vue({
  el: element,
  data: function(){
    notificacion: "algo"
  },


  components: { Notificacion }


})
})