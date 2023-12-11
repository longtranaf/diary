<template>
  <div>
    <button @click="$router.push('/diary')">List</button>
    <DiaryCreate />
  </div>
</template>
  <script setup>
const router = useRouter();
//event bus listener
const { eventBus } = useNuxtApp();
console.log("nuxtApp12", eventBus);
console.log("onDiaryAdded", onDiaryAdded);
Object.keys(onDiaryAdded).forEach((event) => {
  eventBus.on(event, (data) => {
    // filter event listener by event name
    
    console.log("event", event);
    onDiaryAdded[event](data);
    router.push("/diary");
  });
});
// eventBus.on("diaryAdded", ({event,data}) => {
//   const listeners = onDiaryAdded[event];
//     console.log("listeners", listeners);
//   if(listeners){
//     console.log("listener123123", listeners)
//     listeners(data)
//   }
//   router.push("/diary");
// });
</script>