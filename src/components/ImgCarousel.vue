<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export interface ImgCarouselProps {
  images?: Array<String>;
}

withDefaults(defineProps<ImgCarouselProps>(), {
  images: () => [
    "postercianjur.png",
    "postersantunan.png",
    "postergalangdana.png",
  ],
});

const findImg = (filename: String) => {
  return new URL(`../assets/images/${filename}`, import.meta.url).href;
};
</script>

<template>
  <div class="carousel-container">
    <Carousel class="carousel" :autoplay="4000">
      <Slide v-for="(img, index) in images" :key="index" class="carousel-slide">
        <div class="carousel-img-container">
          <img class="carousel-img" :src="findImg(img)" alt="auto" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
  background-color: white;
}

.carousel {
  width: 30vw;
  height: max-content;
}

.carousel-slide {
  border-radius: 8px;
  width: max-content;
}

.carousel-img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 40vh;
}

.carousel-img {
  height: 100%;
  width: auto;
  max-width: 30vw;
}
</style>
