<!--
  参考
  フォーム入力バインディング
    https://v3.ja.vuejs.org/guide/forms.html
  Vue.jsの入力フォームをコンポネート化(部品化)
    https://reffect.co.jp/vue/vue-js-input-v-model
-->

<template>
  <h1>Input Form</h1>
  <div id="v-model-basic">
    <div class="row">
      <div class="col">
        <h2>input</h2>
        <input v-model="input_value" placeholder="edit me" class="form-control"/>
        <span >Value is: {{ input_value }}</span>
      </div>

      <div class="col">
        <h2>textarea</h2>
        <textarea v-model="textarea_value" placeholder="edit me" class="form-control"/>
        <span>Value is: {{ textarea_value }}</span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2>checkbox</h2>
        <input type="checkbox" id="jack" value="Jack" v-model="checked_values" class="form-check-input"/>
        <label for="jack" class="form-check-label">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checked_values" class="form-check-input"/>
        <label for="john" class="form-check-label">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checked_values" class="form-check-input"/>
        <label for="mike" class="form-check-label">Mike</label>
        <span>Value is: {{ checked_values }}</span>
      </div>

      <div class="col">
        <h2>radio</h2>
        <input type="radio" id="woman" value="woman" v-model="radio_selected_value" class="form-check-input"/>
        <label for="woman"  class="form-check-label">Woman</label>
        <input type="radio" id="man" value="man" v-model="radio_selected_value" class="form-check-input"/>
        <label for="man"  class="form-check-label">Man</label>
        <span>Value is: {{ radio_selected_value }}</span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2>select</h2>
        <select v-model="selected_values" multiple class="form-select">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Value is: {{ selected_values }}</span>
      </div>

      <div class="col">
        <h2>boolean</h2>
        <input type="checkbox" v-model="toggle" />
        <span>Value is: {{ toggle }}</span>
      </div>

    </div>

    <div class="row">
      <div class="col">
        <h2>外字</h2>
        <span >Value is: <span v-html="input_gaiji_value"></span></span>
      </div>

      <div class="col">
        <h2>Button</h2>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2>Range</h2>
        <label for="customRange1" class="form-label">Example range</label>
        <input type="range" v-model="range" class="form-range" id="customRange1">
        <span>Value is: {{ range }}</span>
      </div>
    </div>
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
      range: 10,
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
