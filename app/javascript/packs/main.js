import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import App from '../main.vue'


Vue.use(VueResource);
Vue.use(ElementUI);

document.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("app")
    if (element != null) { }
    var app= new Vue({
        el: element,
        data: function() {
            return{
                radio2: 3,
                mensaje: "hola"
            }
        },
        methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }},
    component: {app}
})
})
