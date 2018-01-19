import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate'
import Notify from 'vue-notifyjs'
import vSelect from 'vue-select'
import DatePicker from 'vuejs-datepicker'
import Buefy from 'buefy'


Vue.use(VueResource)
Validator.localize('es', es)
Vue.use(VeeValidate)
Vue.use(Notify)
Vue.use(Buefy)



Vue.component('v-select', vSelect)
Vue.component('Datepicker',DatePicker )

document.addEventListener('DOMContentLoaded', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  var element =  document.getElementById("empresa-form")
  if (element != null){
    var id = element.dataset.id
    var empresa = JSON.parse(element.dataset.empresa)
    var pacientes_attributes = JSON.parse(element.dataset.pacientesAttributes)
    pacientes_attributes.forEach(function(paciente)  { paciente._destroy = null })
    empresa.pacientes_attributes = pacientes_attributes;
 //INICIO DEL VUEJS
    var app =  new Vue({
      el:  element,
      data: function(){
        return {id: id , empresa: empresa,
          paciente: empresa.paciente_attributes,
          errores: {},
          options: ["T.C","T.T"],
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          select: null,
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
        addNotification: function(message) {
          this.$notify({
            message: message,
            horizontalAlign: "top",
            verticalAlign:" right",
            type: "warning"
          })
        },
        saveEmpresa: function(){
        if (this.id == null) {//crea una nueva empresa
          this.$http.post('/empresas', {empresa: this.empresa}).then(response => {
            window.location =`/empresas/${response.body.id}`
            this.addNotification("Empresa guardada exitosamente")
          },(response) =>{
            console.log(response)
            this.errores = response.body
          })
        } else{//edita una empresa existente
          this.$http.put(`/empresas/${this.id}`, {empresa: this.empresa}).then(response => {
              this.addNotification('Empresa guardada exitosamente'),
                  window.location =`/empresas/${response.body.id}`
          },(response) =>{
              this.errores = response.body
            console.log(response)
          })
        }
        },
        existingEmpresa: function(){
          return this.empresa.id !== null
        },
        removePaciente: function(index){
          var paciente =  this.empresa.pacientes_attributes[index]
          if (paciente.id === null) {
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
