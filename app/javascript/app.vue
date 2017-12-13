<template>
  <div id='hello'>
      <input type ="text" id="input" v-model="message">
      <p>el mensaje es: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    message: 'hola',
    }
  }
}
</script>