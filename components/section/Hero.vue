<script setup lang="ts">

</script>

<template>
  <section class="h-screen relative flex items-center">
    <figure class="z-10 absolute w-full h-full">
      <img src="~/assets/image/background.png" class="w-full opacity-[3%] h-full object-cover" alt="">
    </figure>
    <div class="px-28 flex justify-between items-center gap-8 z-20">
      <div class="flex flex-col gap-8 basis-1/2">
        <h1 class="text-green-primary text-[64px]">Good Food Us Good Mood</h1>
        <p class="text-[#757575] text-[18px] font-normal">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
        <div class="flex gap-4">
          <BaseButton title="Daftar Sekarang" color="green" />
          <BaseButton title="About Us" color="gray" />
        </div>
      </div>
      <div class="basis-1/2 flex items-center justify-center">
        <figure class="relative w-[500px] h-auto">
          <span
            class="w-[600px] h-[600px] rounded-full bg-[#C4C4C4] opacity-20 absolute
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]" />
          <img
            class="w-full h-full object-cover"
            src="~/assets/image/hero-image.png"
            alt="">
          <BaseGlassCard class="absolute -bottom-12 -left-36" />
        </figure>
      </div>
    </div>
  </section>
</template>
<style>
</style>