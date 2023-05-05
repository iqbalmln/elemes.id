<script setup lang="ts">
interface HeadingProps {
  title: string;
  subtitle: string;
}

defineProps<HeadingProps>()

</script>

<template>
  <header class="flex flex-col text-2xl lg:text-[38px]">
    <h2>{{ title }}</h2>
    <p class="text-green-primary">{{ subtitle }}</p>
  </header>  
</template>
