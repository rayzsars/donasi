<script setup lang="ts">
import UrgentDonation from '@/components/UrgentDonation.vue';
import ImgCarousel from '@/components/ImgCarousel.vue'
</script>

<template>
    <!-- CAROUSEL -->
    <img-carousel />

    <!-- URGENT -->
    <urgent-donation />

    <!-- IMAGE SEPARATOR -->
    <img src="@/assets/images/donation.jpeg" alt="" class="img-sep-1">

    <!-- URGENT -->
    <urgent-donation />
</template>

<style scoped>
</style>