import Vue from 'vue/dist/vue.esm'
//import TurbolinksAdapter from 'vue-turbolinks'

import VueResource from 'vue-resource'
Vue.use(VueResource)
//document.addEventListener('turbolinks:load', () => {
document.addEventListener('DOMContentLoaded', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var element =  document.getElementById("empresa-form")
  if (element != null){

    var empresa = JSON.parse(element.dataset.empresa)
    var pacientes_attributes = JSON.parse(element.dataset.pacientesAttributes)
    pacientes_attributes.forEach(function(paciente)  { paciente._destroy = null })
    empresa.pacientes_attributes = pacientes_attributes

    var app =  new Vue({
      el:  element,
     // mixins: [TurbolinksAdapter],
      data: function(){
        return {empresa: empresa}
      },
      methods:{
        addPaciente: function(){
          empresa.pacientes_attributes.push({
            id: null,
            nombre: "",
            ruc:"",
            telefono: "",
            ubicacion: "",
            _destroy: null
          })
        },
        removePaciente: function(index){
          this.empresa.pacientes_attributes.splice(index,1)
        }
      }
    })
  }
})
