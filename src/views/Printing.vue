
<template>
  <h1>Printing</h1>
  <ul class="list-group">
    <li class="list-group-item"><router-link to="/report_A4" target="_blank">A4</router-link></li>
    <li class="list-group-item"><router-link to="/report_A4_Landscape" target="_blank">A4 Landscape</router-link></li>
    <li class="list-group-item"><router-link to="/report_A5" target="_blank">A5</router-link></li>
  </ul>
</template>

<script lang="ts">

export default {
  name: 'Printing',
  components: {
  }
}
</script>

<style scoped>
</style>
