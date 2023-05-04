<script setup lang="ts">
const stars = ref([
  {
    id: 0,
    icon: 'bx:bxs-star',
    active: true
  },
  {
    id: 1,
    icon: 'bx:bxs-star',
    active: true
  },
  {
    id: 2,
    icon: 'bx:bxs-star',
    active: true
  },
  {
    id: 3,
    icon: 'bx:bxs-star',
    active: true
  },
  {
    id: 4,
    icon: 'bx:bxs-star',
    active: false
  },
])
</script>

<template>
  <div class="tes flex gap-5 p-5 w-[350px]">
    <figure class="w-[75px] h-auto">
      <img src="~/assets/image/hero-image.png" class="w-full h-full object-cover" alt="">
    </figure>
    <div class="flex flex-col">
      <p class="font-semibold">Green Salad Tomato</p>
      <span class=text-[#757575]>Tomato</span>
      <div>
        <Icon v-for="star in stars" :name="star.icon" :color="star.active ? 'orange' : 'gray'" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.tes {
background: rgba(255, 255, 255, 0.22);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>