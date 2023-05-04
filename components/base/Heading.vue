<script setup lang="ts">
interface HeadingProps {
  title: string;
  subtitle: string;
}

defineProps<HeadingProps>()

</script>

<template>
  <header class="flex flex-col gap-2 text-[38px]">
    <h2>{{ title }}</h2>
    <p class="text-green-primary">{{ subtitle }}</p>
  </header>  
</template>
