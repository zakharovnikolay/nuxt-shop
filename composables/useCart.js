import { ref } from 'vue'

export const useCart = () => {
  const cart = ref([])
  
  if (process.client) {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      cart.value = JSON.parse(savedCart)
    }
    
    watch(cart, (newCart) => {
      localStorage.setItem('cart', JSON.stringify(newCart))
    }, { deep: true })
  }
  
  return cart
}