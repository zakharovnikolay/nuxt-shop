<template>
  <div class="container mx-auto p-2">
    <h1 class="text-xl font-bold mb-4">Каталог товаров</h1>
    
    <div class="flex gap-2">
      <div class="w-1/5 min-w-[160px] sticky top-2 h-fit">
        <div class="bg-gray-100 p-2 rounded">
          <h2 class="font-bold mb-2 text-xs">Фильтры</h2>
          <select class="w-full p-1 text-xs border rounded mb-1">
            <option>Цвет</option>
            <option>Пол</option>
            <option>Размер</option>
          </select>
          <button class="w-full bg-blue-600 text-white py-1 text-xs rounded hover:bg-blue-700">
            Применить
          </button>
        </div>
      </div>
      
      <div class="flex-1">
        <div class="grid grid-cols-7 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 gap-7">
          <div 
            v-for="product in products" 
            :key="product.id" 
            class="border rounded p-1 hover:shadow transition-all duration-100 flex flex-col"
            style="height: 160px;"
          >
            <div class="h-[65%] bg-gray-50 mb-0.5 overflow-hidden flex items-center justify-center">
              <img 
                :src="product.thumbnail" 
                :alt="product.title"
                class="object-cover w-full h-full"
                v-if="product.thumbnail"
              >
              <span v-else class="text-gray-400 text-[0.6rem]">Нет фото</span>
            </div>
            
            <div class="flex-1 flex flex-col justify-between px-0.5">
              <h3 class="font-medium text-[0.65rem] leading-tight truncate">{{ product.title }}</h3>
              <div class="flex items-center justify-between">
                <p class="text-[0.7rem] font-bold">{{ product.price }} Цена ₽</p>
                <button 
                  @click="addToCart(product)"
                  class="bg-green-600 text-white text-[0.6rem] px-1 py-0.5 rounded hover:bg-green-700"
                >
                  Купить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('https://dummyjson.com/products')
const cart = useCart()

const addToCart = (product) => {
  cart.value.push(product)
}
</script>