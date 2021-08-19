<template>
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="ナビゲーションの切替">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link to="/" class="navbar-brand">Vue Playground</router-link>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/input_form" class="nav-link">InputForm</router-link>
        </li>
        <li class="nav-item">
          <!-- <router-link to="/printing" class="nav-link" target="_blank">Printing</router-link> -->
          <router-link to="/printing" class="nav-link">Printing</router-link>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" id="navbarDropdownMenuLink" aria-expanded="false">Dropdown Menu</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">DropdownItem1</a></li>
            <li><a class="dropdown-item" href="#">DropdownItem2</a></li>
            <li><a class="dropdown-item" href="#">DropdownItem3</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
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
