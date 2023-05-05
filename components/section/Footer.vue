<script setup lang="ts">
const categories = ref(['Cupcake', 'Pizza', 'Kebab', 'Salmon', 'Doughnut'])
const abouts = ref(['About us', 'FAQ', 'Report Problem'])
</script>

<template>
  <footer class="px-28 pt-48 pb-8 flex flex-col gap-12">
    <div class=" flex gap-24 py-[50px] px-16 rounded-[20px] bg-green-tertiary">
      <div class="flex flex-col basis-[30%] gap-10">
        <figcaption class="flex flex-col gap-5">
          <img src="~/assets/image/logo.png" alt="">
          <p class="text-sm font-normal text-[#757575]">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
            Kecamatan Setiabudi, Kota Jakarta Selatan, 
            Daerah Khusus Ibukota Jakarta 12950
          </p>
        </figcaption>
        <div class="flex items-center gap-2 ">
          <Icon name="heroicons:envelope" class="text-green-primary text-2xl h-10 w-10 p-2 hover:bg-green-primary hover:text-white rounded-full" />
          <Icon name="bxl:instagram" class="text-green-primary text-2xl h-10 w-10 p-2 hover:bg-green-primary hover:text-white rounded-full" />
          <Icon name="bx:phone" class="text-green-primary text-2xl h-10 w-10 p-2 hover:bg-green-primary hover:text-white rounded-full"/>
        </div>
      </div>
      <div class="flex flex-col basis-[20%] gap-8">
        <p class="text-[18px]">Categories</p>
        <ul class=" flex flex-col gap-5">
          <li v-for="category in categories" class="font-normal text-sm text-[#757575]">{{ category }}</li>
        </ul>
      </div>
      <div class="flex flex-col basis-[20%] gap-8">
        <p class="text-[18px]">About Us</p>
        <ul class=" flex flex-col gap-5">
          <li v-for="about in abouts" class="font-normal text-sm text-[#757575]">{{ about }}</li>
        </ul>
      </div>
      <div class="flex flex-col gap-8 basis-[30%]">
        <p class="text-[18px]">Newsletter</p>
        <div class="flex flex-col gap-4">
          <p class="text-[#757575] font-normal text-sm">Get now free 50% discount for alll products on your first order</p>
          <div class="flex">
            <input
              type="email"
              placeholder="Your email address"
              class="w-full bg-transparent font-normal text-sm px-4 pt-2 pb-1 border-l border-y border-black outline-none rounded-l-lg"
            >
            <button class="uppercase bg-green-primary py-2 px-3 text-white rounded-r-lg">send</button>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm font-normal">
              <Icon name="heroicons:envelope" class="text-green-primary text-base" />
              elemesid@gmail.com
            </span>
            <span class="text-sm font-normal">
              <Icon name="bx:phone" class="text-green-primary text-base" />
              0888 1111 2222 
            </span>
          </div>
        </div>
      </div>
    </div>
    <span class="text-center uppercase text-xs text-[#757575] font-normal">© 2021 Elemes id. All rights reserved</span>
  </footer>
</template>
