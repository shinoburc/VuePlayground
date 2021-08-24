
<template>
  <section class="sheet padding-10mm">
    <h2>Page1</h2>
  </section>
  <section class="sheet padding-10mm">
    <h2>Page2</h2>
  </section>
</template>

<script lang="ts">

export default {
  name: 'ReportA4Landscape',
  setup() {
    /* set report paper size to A4 landscape for browser rendering. */
    document.body.classList.add('A4')
    document.body.classList.add('landscape')
    /* set report paper size to A4 landscape for printer. */
    const style = document.createElement('style');
    style.innerHTML = `@page {size: A4 landscape}`;
    document.head.appendChild(style);
  },
  components: {
  }
}
</script>

<style scoped src="../../node_modules/paper-css/paper.min.css">
</style>
