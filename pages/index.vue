<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <LoginComponent />
  </div>
</template>
<script setup>
const router = useRouter();
// function loginSuccess(username) {
//   console.log("loginSuccess", username);
//     onLoginSuccess(username);
// } 
const { eventBus } = useNuxtApp();
console.log("nuxtApp12", eventBus);
console.log("onLoginSuccess", onLoginSuccess);
Object.keys(onLoginSuccess).forEach((event) => {
    console.log("event", event);
  eventBus.on(event, (data) => {
    // filter event listener by event name
    onLoginSuccess[event](data);
    router.push("/diary/create");
  });
});
</script>
  