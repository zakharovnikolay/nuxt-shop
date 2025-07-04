<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">Вход в кабинет покупателя</h1>
    
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="phone" class="block mb-1">Телефон</label>
        <input 
          v-model="phone"
          type="tel" 
          id="phone" 
          class="w-full p-2 border rounded"
          placeholder="Введите ваш телефон"
          required
        >
      </div>
      
      <div>
        <label for="password" class="block mb-1">Пароль</label>
        <input 
          v-model="password"
          type="password" 
          id="password" 
          class="w-full p-2 border rounded"
          placeholder="Введите пароль"
          required
        >
      </div>
      
      <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
      
      <button 
        type="submit" 
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Войти
      </button>
    </form>
    
    <div class="mt-4 flex justify-between">
      <NuxtLink to="/reset-password" class="text-blue-600 hover:underline">Восстановить пароль</NuxtLink>
      <NuxtLink to="/register" class="text-blue-600 hover:underline">Зарегистрироваться</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const phone = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  if (phone.value === '123' && password.value === '123') {
    navigateTo('/catalog')
  } else {
    error.value = 'Неверный телефон или пароль'
  }
}
</script>