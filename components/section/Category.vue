<script setup lang="ts">
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

const categories = ref([
  {
    id: 0,
    menu: 'cupcake',
    name: 'Cupcake',
    desc: '22 items',
    color: 'bg-green-secondary'
  },
  {
    id: 1,
    menu: 'pizza',
    name: 'Pizza',
    desc: '25 items',
    color: 'bg-[#E4F2F4]'
  },
  {
    id: 2,
    menu: 'kebab',
    name: 'Kebab',
    desc: '12 items',
    color: 'bg-[#EAEEFA]'
  },
  {
    id: 3,
    menu: 'salmon',
    name: 'Salmon',
    desc: '22 items',
    color: 'bg-[#F9EEF3]'
  },
  {
    id: 4,
    menu: 'doughnut',
    name: 'Doughnut',
    desc: '11 items',
    color: 'bg-[#F3F7D9]'
  },
])

</script>

<template>
  <section class="h-[400px] pl-28 flex flex-col gap-12">
    <BaseHeading title="Browse our Category" subtitle="Receipt" />
    <div class="py-4">
      <Swiper
        :modules="[Autoplay]"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: true
        }"
        :effect="'creative'"
        :loop="true"
        :space-between="24"
        :slides-per-view="5"
        class="flex flex-col gap-4"
      >
        <div class="flex justify-end">
          <SwiperControls />
        </div>
        <swiper-slide
          v-for="category in categories.concat(categories)"
          :key="category.id"
          class="w-4"
        >
          <div
            class="flex flex-col relative gap-4 items-center hover:rounded-lg hover:transform hover:scale-105 transition ease-in duration-300 p-4 rounded-md haha"
            :class="category.color">
            <span class="absolute top-0 left-0 rounded-md w-full h-full -z-10 opacity-90" :class="category.color" />
            <figure
              class="text-center h-12"
              :class="`bg-[${category.color}]`"
            >
              <img :src="`/_nuxt/assets/image/icons/${category.menu}.png`" class="w-full h-full object-contain rounded-lg">
            </figure>
            <div class="flex flex-col text-center">
              <p>{{ category.name }}</p>
              <span class="text-sm font-normal">{{ category.desc }}</span>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </section>
</template>
<style scoped>
.haha:hover {
  background: url('~/assets/image/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>