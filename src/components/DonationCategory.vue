<script setup lang="ts"></script>

<template>
    <!-- CATEGORI -->
    <div class="categori-container">
        <div class="categori">
            <button class="cat-1">
                <img src="@/assets/images/galangdana.png" alt="">
                <h3>Galang Dana</h3>
            </button>
            <button class="cat-1">
                <img src="@/assets/images/donasi.png" alt="">
                <h3>Donasi</h3>
            </button>
            <button class="cat-1">
                <img src="@/assets/images/donasisaya.png" alt="">
                <h3>Donasi Saya</h3>
            </button>
            <button class="cat-1">
                <img src="@/assets/images/inbox.png" alt="">
                <h3>Inbox</h3>
            </button>
            <button class="cat-1">
                <img src="@/assets/images/santunan.png" alt="">
                <h3>Santunan</h3>
            </button>
        </div>
    </div>
</template>

<style scoped>
.categori-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: max-content;
    margin: auto;
    margin-top: 10px;
    background-color: white;
}

.categori {
    display: flex;
    justify-content: space-between;
    width: 28.5vw;
    padding: 20px;
    height: max-content;
}

.cat-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
}

.cat-1 img {
    width: 2/4vw;
    height: 5vh;
}

.cat-1 h3 {
    font-weight: 400;
    margin: 0px;
}
</style>