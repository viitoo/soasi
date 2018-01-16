<template>
  <div>
      <select class="material-select">
           <option>Vue</option>
      </select>
  </div>
</template>

<script>
  export default {
      mounted(){
              $('.material-select').material_select();
      }
  }
</script>
