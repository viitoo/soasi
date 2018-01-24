<template>
  <div id="indexEmpresas">
     <vue-good-table
            :columns="columns"
            :rows="rows"
            :rtl= "false"
            :lineNumbers="true"
            :globalSearch="true"
            :paginate="true"
            :sortable="true"
            nextText='Siguiente'
            prevText='Previo'
            allText= "Todos"
            ofText="de"
            rowsPerPageText="Registros por fila"
            globalSearchPlaceholder	= "BUSCAR REGISTRO"
            styleClass="el-table">
      <div slot="emptystate">
        <p align="center">Lo sentimos tu busqueda no obtuvo resultados, intenta con otro criterio de busqueda</p>
      </div>
      <template slot="table-row-after" slot-scope="props">
        <td>
          <a v-bind:href="url.concat(props.row.id)" >
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
          </a>
          <a v-bind:href="url.concat(props.row.id).concat('/edit')" >
            <i class="el-icon-setting" style="margin-right: 0px;  color: white; cursor:hand">editar</i>
          </a>
        </td>
      </template>
      <template slot="table-row" slot-scope="props">
        <td>{{ props.row.nombre }}</td>
        <td>{{ props.row.ruc }}</td>
        <td>{{ props.formattedRow.telefono }}</td>
        <td>{{ props.row.email }}</td>
      </template>
    </vue-good-table>
  </div>
</template>

<script>

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var json_obj = JSON.parse(Get('/empresas/1/getjson'));
export default {
    name: 'empresas',
    data(){
        return {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    filterable: true,
                },
                {
                    label: 'RUC',
                    field: 'ruc',
                    type: 'string',
                    html: false,
                    filterable: true,
                },
                {
                    label: 'Telefono',
                    field: 'telefono',
                },
                {
                    label: 'Email',
                    field: 'email',
                    html: false,
                },

            ],


            rows: json_obj,
            url: 'http://localhost:3000/empresas/',

        };
    },

};
</script>
