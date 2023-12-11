
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@longtranaf/auth-module', '@longtranaf/create-diary-module','nuxt-icon', '@longtranaf/list-status-module', '@pinia-plugin-persistedstate/nuxt'],
  // globally inject event bus
  plugins: ['~/plugins/event-bus.ts'],
})
