<template>
  <ApplicationHeader/>
  <InputForm/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputForm from './components/InputForm.vue';
import ApplicationHeader from './components/ApplicationHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    ApplicationHeader,
    InputForm
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
