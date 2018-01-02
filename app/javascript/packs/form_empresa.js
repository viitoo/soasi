import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate'
Vue.use(VueResource)
Validator.localize('es', es)
Vue.use(VeeValidate)

document.addEventListener('DOMContentLoaded', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  var element =  document.getElementById("empresa-form")
  if (element != null){
    var id = element.dataset.id
    var empresa = JSON.parse(element.dataset.empresa)
    var pacientes_attributes = JSON.parse(element.dataset.pacientesAttributes)
    pacientes_attributes.forEach(function(paciente)  { paciente._destroy = null })
    empresa.pacientes_attributes = pacientes_attributes;
    var app =  new Vue({
      el:  element,

      data: function(){
        return {id: id , empresa: empresa,
        errores: {}
      }
      },
      methods:{
        addPaciente: function(){
          this.empresa.pacientes_attributes.push({
            id: null,
            primer_nombre: "",
            segundo_nombre:"",
            primer_apellido: "",
            segundo_apellido:"",
            tipo_identificacion: "",
            numero_identificacion: "",
            genero: "",
            fecha_nac: "",
            lugar_nacimiento: "",
            telefono: "",
            grupo_sangre: "",
            edo_civil: "",
            _destroy: null
          })
        },

        saveEmpresa: function(){
        if (this.id == null) {//crea una nueva empresa
          this.$http.post('/empresas', {empresa: this.empresa}).then((response) => {
            window.location =`/empresas/${response.body.id}`
          },(response) =>{
            console.log(response)
            this.errores = response.body
          })
        } else{//edita una empresa existente
          this.$http.put(`/empresas/${this.id}`, {empresa: this.empresa}).then((response) => {
            window.location =`/empresas/${response.body.id}`
          },(response) =>{
            this.errores = response.body
            console.log(response)
          })
        }

        },
        existingEmpresa: function(){
          return this.empresa.id != null
        },

        removePaciente: function(index){
          var paciente =  this.empresa.pacientes_attributes[index]
          if (paciente.id == null) {
            this.empresa.pacientes_attributes.splice(index,1)
          } else{
            this.empresa.pacientes_attributes[index]._destroy = "1"
          }
        },

        undoRemove: function(index){
          this.empresa.pacientes_attributes[index]._destroy = null
        },



        }
    })
  }
})
