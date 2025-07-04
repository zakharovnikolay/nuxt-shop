<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Каталог товаров</h1>
    
    <div class="flex mb-6">
      <div class="w-1/4 pr-4">
        <h2 class="font-bold mb-2">Сортировка по:</h2>
        <div class="bg-gray-100 p-4 rounded">
          <div class="mb-4">
            <h3 class="font-semibold mb-2">Товар по:</h3>
            <select class="w-full p-2 border rounded">
              <option>Цвет</option>
              <option>Пол</option>
              <option>Размер</option>
              <option>Состав</option>
            </select>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Применить
          </button>
        </div>
      </div>
      
      <div class="w-3/4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div 
            v-for="product in products" 
            :key="product.id" 
            class="border rounded p-4 hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold">{{ product.title }}</h3>
            <p class="text-gray-600 mb-2">{{ product.brand }}</p>
            <p class="text-lg font-semibold mb-2">{{ product.price }} ₽</p>
            <button 
              @click="addToCart(product)"
              class="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
            >
              В корзину
            </button>
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