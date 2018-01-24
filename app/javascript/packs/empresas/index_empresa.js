import Vue from "vue/dist/vue.esm";
import VueGoodTable from "vue-good-table";
import VueResource from "vue-resource";
import ElementUI from "element-ui";
//import DataTables from "vue-data-tables";
import lang from "element-ui/lib/locale/lang/es";
import locale from "element-ui/lib/locale";
import Empresas from "../../components/index_empresa.vue";

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueGoodTable);

//Vue.use(DataTables);
locale.use(lang);

//API EMPRESAS
//let apiURL= "/empresas/1/getjson"

document.addEventListener("DOMContentLoaded", () => {
    var element = document.getElementById("indexEmpresa");
    if (element != null) {
    }
    let empresas = new Vue({
        el: element,
        data: {
            datos: [],
            empresas: [],
            empresa: {
                nombre: "",
                ruc: "",
                telefono: "",
                email: ""
            }
        },
        components: { empresas: Empresas }
    });
});
