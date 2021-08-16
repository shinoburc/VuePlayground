<template>
  <header>
    <nav>
      <h2>メニュー</h2>
      <ul>
        <li><a href=”#”>TOP</a></li>
        <li><a href=”#”>ABOUT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ApplicationHeader',
  data() {
    return { }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
