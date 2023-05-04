<script setup lang="ts">
const menus = ref([
    {
      id: 0,
      name: 'Home',
      event: false
    },
    {
      id: 1,
      name: 'About',
      event: false
    },
    {
      id: 2,
      name: 'Promotions',
      event: true
    },
    {
      id: 3,
      name: 'Blogs',
      event: false
    },
    {
      id: 4,
      name: 'Contact Us',
      event: false
    },
  ])

</script>

<template>
  <header class="absolute z-20 top-0 left-0 px-28 py-6 w-full flex justify-between items-center">
    <figure>
      <img src="~/assets/image/logo.png" alt="">
    </figure>
    <nav>
      <ul class="flex gap-8">
        <li
          v-for="menu in menus"
          class="text-[#757575] hover:text-black cursor-pointer relative">
          {{ menu.name }}
          <BaseTag v-if="menu.event" title="Hot" class="absolute -top-3 -right-2" />
        </li>
      </ul>
    </nav>
    <div class="flex gap-6 items-center">
      <NuxtLink to="/">Masuk</NuxtLink>
      <BaseButton title="Daftar Sekarang" color="green" />
    </div>
  </header>
</template>
