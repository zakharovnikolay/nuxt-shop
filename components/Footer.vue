<template>
  <footer class="bg-black text-white p-4 mt-auto">
    <div class="container mx-auto grid grid-cols-3 gap-4">
      <div>
        <h3 class="font-bold mb-2">Информация</h3>
        <ul class="space-y-1">
          <li><NuxtLink to="/about" class="hover:underline">О нас</NuxtLink></li>
          <li><NuxtLink to="/news" class="hover:underline">Новости</NuxtLink></li>
          <li><NuxtLink to="/reviews" class="hover:underline">Отзывы</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-2">Покупки</h3>
        <ul class="space-y-1">
          <li><NuxtLink to="/payment" class="hover:underline">Оплата</NuxtLink></li>
          <li><NuxtLink to="/delivery" class="hover:underline">Доставка и возврат</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-2">Контакты</h3>
        <p>+79148888888</p>
        <p>г.Якутск, Дзержинского 30</p>
      </div>
    </div>
  </footer>
</template>