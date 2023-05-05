<script setup lang="ts">
interface ReceiptCardProps {
  background: string;
  image: string;
  title: string;
  subtitle: string;
  favorite: number;
}
defineProps<ReceiptCardProps>()
const stars = ref(5)
</script>

<template>
  <div
    class="relative py-6 lg:py-8 px-5 lg:px-6 flex flex-col gap-4 shadow-card rounded-md
    haha hover:transform hover:scale-100"
    :class="background"
  >
    <span class="absolute top-0 left-0 rounded-md w-full h-full -z-10 opacity-90" :class="background" />    
    <figure class="rounded-md w-[120px]">
      <img class="w-full h-full rounded-md object-cover" :src="`/_nuxt/assets/image/menus/${image}.png`" alt="">
    </figure>
    <div>
      <p class="text-[26px]">{{ title }}</p>
      <span class="text-[18px] text-green-primary">{{ subtitle }}</span>
    </div>
    <div>
      <Icon
        v-for="(star, index) in stars" :color="index < favorite ? 'orange' : 'gray'"
        class="text-xs"
        name="bx:bxs-star"
      />
    </div>
  </div>
</template>

<style scoped>
.haha:hover {
  background: url('~/assets/image/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
