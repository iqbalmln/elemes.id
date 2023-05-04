<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
  <div class="flex gap-3 my-6 mx-24 self-end">
    <button
      @click="swiper.slidePrev()"
      class="bg-green-primary uppercase px-4 py-2 text-white rounded-full flex items-center gap-1"
    >
      <Icon name="heroicons:arrow-left-circle-solid" class="text-2xl" />
      Prev
    </button>
    <button
      @click="swiper.slideNext()"
      class="bg-green-primary uppercase px-4 py-2 text-white rounded-full flex items-center gap-1"
    >
      Next
      <Icon name="heroicons:arrow-right-circle-solid" class="text-2xl" />
    </button>
  </div>
</template>