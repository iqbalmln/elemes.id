<script setup lang="ts">
const receipts = ref([
  {
    id: 0,
    background: 'bg-sky-secondary',
    image: 'pizza',
    title: 'Pizza Paperoni',
    subtitle: 'Pizza',
    favorite: 4
  },
  {
    id: 1,
    background: 'bg-sky-secondary',
    image: 'pizza-meat',
    title: 'Pizza Meat',
    subtitle: 'Pizza',
    favorite: 3
  },
  {
    id: 2,
    background: 'bg-blue-secondary',
    image: 'doner-kebab',
    title: 'Doner Kebab',
    subtitle: 'Kebab',
    favorite: 5
  },
  {
    id: 3,
    background: 'bg-pink-secondary',
    image: 'salmon-roll',
    title: 'Salmon Roll',
    subtitle: 'Salmon',
    favorite: 4
  },
  {
    id: 4,
    background: 'bg-green-secondary',
    image: 'cupcake-choco',
    title: 'Cupcake Choco',
    subtitle: 'Cupcake',
    favorite: 4
  },
  {
    id: 5,
    background: 'bg-pistachio-secondary',
    image: 'doughnut-milk',
    title: 'Doughnut Milk',
    subtitle: 'Doughnut',
    favorite: 5
  },
  {
    id: 6,
    background: 'bg-pistachio-secondary',
    image: 'doughnut-unicorn',
    title: 'Doughnut Unicorn',
    subtitle: 'Doughnut',
    favorite: 4
  },
  {
    id: 7,
    background: 'bg-blue-secondary',
    image: 'kathi-kebab',
    title: 'Kathi Kebab',
    subtitle: 'Kebab',
    favorite: 4
  },
])
</script>

<template>
  <section class="px-28 py-[50px] flex flex-col gap-[50px]">
    <BaseHeading title="Browse Our Trending" subtitle="Receipt" />
    <div class="grid grid-cols-4 gap-5 grid-rows-2">
      <BaseReceiptCard
        v-for="receipt in receipts"
        :key="receipt.id"
        :background="receipt.background"
        :image="receipt.image"
        :title="receipt.title"
        :subtitle="receipt.subtitle"
        :favorite="receipt.favorite"
      />
    </div>
    <BaseButton title="All Receipt" color="green" class="text-center" />
  </section>
</template>
