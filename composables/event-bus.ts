export default function injectEventBus() {
    const hooks = useNuxtApp().hooks;
    
    return inject('eventBus', {
        on: hooks.hook,
        emit: hooks.callHook,
    });
  }