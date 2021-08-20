<template>
  <div id="app">
    <router-view name="application_header"/>
    <router-view name="content"/>
    <router-view name="application_footer"/>
    <router-view name="printing"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*
  text-align: center;
  */
  color: #2c3e50;
}

/*** 外字 start ***/
@font-face {
  font-family: "EUDCFont";
  /*
  src: url("EUDC.woff2") format('woff2'),
       url("EUDC.woff")  format('woff');
  */
  src: url("assets/fonts/EUDC.converted-woff-tools.woff") format('woff');
}

.EUDCFontClass {
  font-family: "EUDCFont";
}

/* 全てのタグに外字を適応 */
* {
  font-family: "EUDCFont";
}
/*** 外字 end ***/
</style>
