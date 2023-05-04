<script setup lang="ts">
interface TagProps {
  title: string;
}

defineProps<TagProps>()

</script>

<template>
  <span class="bg-red-500 text-white text-[8px] uppercase px-2 py-[2px] rounded-lg">{{ title }}</span>
</template>
