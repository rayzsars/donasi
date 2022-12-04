<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DonationCategory from './components/DonationCategory.vue';
</script>


<template>
  <!-- HEADING -->
  <div id="header">
    <router-link to="/">
        <img src="@/assets/images/logo.jpeg" alt="" id="logo" />
    </router-link>
    <div>
      <div class="search-box">
        <input id="input-value" type="text" placeholder="Mari berdonasi" autofocus="false">
        <button class="btn-search"><img src="@/assets/images/search.png" alt=""></button>
      </div>
    </div>
  </div>
    
  <!-- CATEGORI -->
  <DonationCategory />

  <RouterView />

  <!-- CATEGORI -->
  <DonationCategory />
</template>

<style>
@import '@/assets/main.css';

/* HEADER */
#header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: max-content;
  padding: 8px 0;
  background-color: aquamarine;
  column-gap: 12px;
}

#logo {
  width: 48px;
}

.img-sep-1 {
  position: relative;
  display: flex;
  margin: auto;
  margin-top: 10px;
  width: 31.5vw;
}
</style>
