export default defineNuxtConfig({
  nitro: {
    compatibilityDate: '2025-07-03'
  },
  css: ['~/assets/css/tailwind.css'],
  
  modules: ['@nuxtjs/tailwindcss'],
  
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  }
})