$('#empresas').dataTable({
  scrollY:        300,
  deferRender:    true,

  scroller: true,



  select: true,

language: {
    lengthMenu: "registros por pagina _MENU_ ",
    zeroRecords: "Sin registros - lo siento",
    infoEmpty: "Sin registros",
    infoFiltered: "(filtrados desde  _MAX_ registros en total)",
    emptyTable:   "No hay registros disponibles",
    info:         "Mostrando _START_ a _END_ of _TOTAL_ entradas",
    infoEmpty:    "Mostrando 0 a 0 d 0 entradas",
    infoFiltered: "(filtrando _MAX_ total entradas)",
    infoPostFix:  "",
    thousands:    ",",
    lengthMenu:   "Mostrar # de registros _MENU_ ",
    loadingRecords:"Cargando...",
    processing:   "Procesando...",
    search:       "Buscar texto:",
    zeroRecords:  "No se encontraron registros a tu busqueda",
    paginate: {
      first:      "Primero",
      last:       "Ultimo",
      next:       "Proximo",
      previous:   "Previo"
     }
  }

  })
  //$('select').addClass("input-field col");
  //$('select').material_select();
  //$('empresas').addClass("input-field col s4-default");
