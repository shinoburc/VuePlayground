<!--
  参考
  フォーム入力バインディング
    https://v3.ja.vuejs.org/guide/forms.html
  Vue.jsの入力フォームをコンポネート化(部品化)
    https://reffect.co.jp/vue/vue-js-input-v-model
-->

<template>
  <div id="v-model-basic">
    <h1>Input Form</h1>

    input
    <input v-model="input_value" placeholder="edit me" />
    <span >Value is: {{ input_value }}</span>
    <br/>

    textarea
    <textarea v-model="textarea_value" placeholder="edit me" />
    <span>Value is: {{ textarea_value }}</span>
    <br/>

    checkbox
    <input type="checkbox" id="jack" value="Jack" v-model="checked_values" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checked_values" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checked_values" />
    <label for="mike">Mike</label>
    <span>Value is: {{ checked_values }}</span>
    <br/>

    radio
    <input type="radio" id="woman" value="woman" v-model="radio_selected_value" />
    <label for="woman">Woman</label>
    <input type="radio" id="man" value="man" v-model="radio_selected_value" />
    <label for="man">Man</label>
    <span>Value is: {{ radio_selected_value }}</span>
    <br/>

    select
    <select v-model="selected_values" multiple>
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Value is: {{ selected_values }}</span>
    <br/>

    boolean
    <input type="checkbox" v-model="toggle" />
    <span>Value is: {{ toggle }}</span>
    <br/>

    外字
    <span >Value is: <span v-html="input_gaiji_value"></span></span>
    <br/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputForm',
  data() {
    return {
      input_value: '',
      textarea_value: '',
      checked_values: [],
      radio_selected_value: '',
      selected_values: [],
      toggle: true,
      input_gaiji_value: '&#57344;&#57345;&#57346;',
    }
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
