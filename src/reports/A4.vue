
<template>
  <section class="sheet">
    <h2>Page1</h2>
  </section>
  <section class="sheet">
    <h2>Page2</h2>
  </section>
  <section class="sheet">
    <h2>Page3</h2>
  </section>
</template>

<script lang="ts">

export default {
  name: 'ReportA4',
  setup() {

    /* set report paper size to A4 for browser rendering. */
    document.body.classList.add('A4')
    /* set report paper size to A4 for printer. */
    const style = document.createElement('style');
    style.innerHTML = `@page {size: A4}`;
    document.head.appendChild(style);
  },
  components: {
  }
}
</script>

<style scoped src="../../node_modules/paper-css/paper.min.css">
</style>
