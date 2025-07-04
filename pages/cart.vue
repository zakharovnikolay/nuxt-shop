<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Корзина</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-3 text-left">Наименование товара</th>
            <th class="p-3 text-left">Цена</th>
            <th class="p-3 text-left">Количество</th>
            <th class="p-3 text-left">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index" class="border-b">
            <td class="p-3">{{ item.title }}</td>
            <td class="p-3">{{ item.price }} ₽</td>
            <td class="p-3">
              <div class="flex items-center">
                <button 
                  @click="decreaseQuantity(index)"
                  class="bg-gray-200 px-2 py-1 rounded-l"
                >
                  -
                </button>
                <span class="px-4">{{ item.quantity || 1 }}</span>
                <button 
                  @click="increaseQuantity(index)"
                  class="bg-gray-200 px-2 py-1 rounded-r"
                >
                  +
                </button>
              </div>
            </td>
            <td class="p-3">{{ (item.price * (item.quantity || 1)).toFixed(2) }} ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="mt-6 flex justify-between items-center">
      <div class="text-lg font-semibold">
        Итого: {{ total }} ₽
      </div>
      <button 
        class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script setup>
const cart = useCart()

const total = computed(() => {
  return cart.value.reduce((sum, item) => {
    return sum + (item.price * (item.quantity || 1))
  }, 0)
})

const increaseQuantity = (index) => {
  if (!cart.value[index].quantity) {
    cart.value[index].quantity = 1
  }
  cart.value[index].quantity++
}

const decreaseQuantity = (index) => {
  if (!cart.value[index].quantity || cart.value[index].quantity <= 1) {
    cart.value.splice(index, 1)
  } else {
    cart.value[index].quantity--
  }
}
</script>