import Vue from "vue/dist/vue.esm"
import VueResource from "vue-resource"
import ElementUI from "element-ui"
import lang from "element-ui/lib/locale/lang/es"
import locale from "element-ui/lib/locale"
import VueGoodTable from "vue-good-table"
import Empresas from "../components/index_empresa.vue"

locale.use(lang)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueGoodTable)
Vue.use(Empresas)

document.addEventListener("DOMContentLoaded", () => {
	var element = document.getElementById("plantilla")
	if (element != null) { }
	var main = new Vue({
		el: element,
		components: { empresas: Empresas },

		data: function() {
			return{
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath)
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath)
			}},
		})

	})
