<script setup lang="ts">

</script>

<template>
  <section class="min-h-screen pb-[50px] lg:pb-0 lg:h-screen relative lg:flex lg:items-center">
    <figure class="z-10 absolute w-full h-full">
      <img src="~/assets/image/background.png" class="w-full opacity-[3%] h-full object-cover" alt="">
    </figure>
    <div class="px-8 lg:px-28 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-24 lg:gap-8 z-20">
      <div class="flex flex-col gap-8 basis-1/2 pt-40">
        <h1 class="text-green-primary text-5xl lg:text-[64px]">Good Food Us Good Mood</h1>
        <p class="hidden lg:block text-[#757575] text-[18px] font-normal">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
        <div class="hidden lg:flex gap-4">
          <BaseButton title="Daftar Sekarang" color="green" />
          <BaseButton title="About Us" color="gray" />
        </div>
      </div>
      <div class="basis-1/2 flex items-center justify-center">
        <figure class="relative w-[200px] lg:w-[500px] h-auto">
          <span
            class="w-[250px] lg:w-[600px] h-[250px] lg:h-[600px] rounded-full bg-[#C4C4C4] opacity-20 absolute
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]" />
          <img
            class="w-full h-full object-cover"
            src="~/assets/image/hero-image.png"
            alt="">
          <BaseGlassCard class="absolute -right-44 -bottom-12 lg:right-auto lg:-bottom-12 lg:-left-36" />
        </figure>
      </div>
      <div class="flex flex-col gap-8 lg:hidden">
        <p class="text-[#757575] text-[18px] font-normal">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
          <div class="flex gap-4">
            <BaseButton title="Daftar Sekarang" color="green" />
            <BaseButton title="About Us" color="gray" />
          </div>
      </div>
    </div>
  </section>
</template>
<style>
</style>