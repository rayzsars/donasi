<script setup lang="ts">
import ImgCarousel from '@/components/ImgCarousel.vue';
import UrgentDonation from '@/components/UrgentDonation.vue'
</script>

<style scoped>
</style>

<template>
    <!-- CONTENT -->
    <img-carousel />

    <!-- URGENT -->
    <urgent-donation />

    <!-- IMAGE SEPARATOR -->
    <img src="../assets/images/donation.jpeg" alt="" class="img-sep-1">

    <!-- URGENT -->
    <urgent-donation />
</template>