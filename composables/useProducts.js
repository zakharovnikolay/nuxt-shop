import { ref } from 'vue'

export const useProducts = async () => {
  const products = ref([])
  
  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    products.value = data.products
  } catch (error) {
    console.error('Error fetching products:', error)
  }
  
  return { products }
}