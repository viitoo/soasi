<template>
  <div id="lista">
    <ul>
      <li v-for="name in names" v-text="name "></li>

    </ul>

  </div>
</template>

<script>
export default {
  data: function () {
    return { names: ['victor', 'flor', 'roger']
    }
  }
}
</script>