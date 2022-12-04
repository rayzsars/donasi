<script setup lang="ts">
</script>

<template>
  <div class="urgent-container">
    <h3>Donasi Mendesak</h3>
    <div class="urgent-items">
      <div v-for="i in 3" :key="i" class="urgent-item">
        <img src="@/assets/images/cianjur.png" alt="">
        <div class="text">
          <div>
            <span class="text1">
              <router-link to="/cianjur">DARURAT! Kisah Pilu Dibalik Korban Gempa Cianjur</router-link>
            </span>
          </div>
          <div class="text1">
            <div data-testid="progressBar" class="style__Track-sc-__sc-15i3suc-0 iPInFn">
            </div>
          </div>
          <div class="text1">
            <div class="flex flex-col">
              <span class="text1">
                "Rp.
                1.000.000"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.urgent-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 40vh;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  background-color: white;
}

.urgent-container h3 {
  margin: 0;
}

.urgent-items {
  position: relative;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 30vw;
  height: 40vh;
  margin-top: 10px;
}

.urgent-items::-webkit-scrollbar {
  display: none;
  position: relative;
}

.urgent-item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 30vh;
  margin-right: 10px;
  box-shadow: 0 0 3px black;
}

.urgent-item img {
  width: 15vw;
  height: 15vh;
  object-fit: cover;
}

.urgent-item h3 {
  font-weight: 400;
  margin: auto;
}

.urgent-item p-text {
  margin-top: 15vh;
}

.urgent-item text {
  overflow: hidden;
  word-break: break-all;
  font-family: semantic;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-top: 5px;

}
</style>