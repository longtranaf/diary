export default defineNuxtPlugin((nuxtApp) => {
    console.log('nuxt123App', nuxtApp);
    const hooks = nuxtApp.hooks;
    const eventBus = {
        on: hooks.hook,
        emit: hooks.callHook,
    };
    // inject & global event bus
    inject('eventBus', eventBus);
    provide('eventBus', eventBus);
    // global event bus
    nuxtApp.eventBus = eventBus;
    console.log('nuxt1234App', nuxtApp);
  })