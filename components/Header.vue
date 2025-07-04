<template>
  <header class="bg-[#009DFF] text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">Интернет-магазин</NuxtLink>
      <nav class="flex space-x-4">
        <NuxtLink to="/catalog" class="hover:text-gray-300">Каталог</NuxtLink>
        <NuxtLink to="/cart" class="hover:text-gray-300">Корзина</NuxtLink>
        <NuxtLink to="/login" class="hover:text-gray-300">Вход</NuxtLink>
      </nav>
    </div>
  </header>
</template>