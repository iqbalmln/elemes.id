<script setup lang="ts">
type Color = "green" | "gray" 

interface ButtonProps {
  title: string;
  color: Color;
}

defineProps<ButtonProps>()

</script>

<template>
  <button
    :class="color === 'green' ? 'bg-green-primary text-white' : 'bg-[#F2F2F2] text-black'"
    class="px-[18px] py-[10px] rounded-full">{{ title }}</button>
</template>
