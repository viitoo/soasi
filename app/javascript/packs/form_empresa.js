import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'

Vue.use(VueResource)
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
      data: function(){
        return {empresa: empresa}
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
        //saveEmpresa: function(){
        //   console.log("algo aqui")
        //},
        saveEmpresa: function(){
        if (this.empresa.id == null) {//crea una nueva empresa
          this.$http.post('/empresas', {empresa: this.empresa}).then(response => {
            window.location =`/empresas/${response.body.id}`
          },response =>{
            console.log(response)
          })
        } else{//edita una empresa existente
          this.$http.put(`/empresas/${this.empresa.id}`, {empresa: this.empresa}).then(response => {
            window.location =`/empresas/${response.body.id}`
          },response =>{
            console.log(response)
          })
        }

        },
        existingEmpresa: function(){
          return this.empresa.id != null
        },

        removePaciente: function(index){
          this.empresa.pacientes_attributes.splice(index,1)
        },



        }
    })
  }
})
