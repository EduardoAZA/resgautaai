<template>
  <div class="flex flex-col items-center border border-gray-300 m-5 rounded-sm" >
    <div class="flex flex-col items-center text-center space-y-4 p-5">
      <i :class="[icon, 'rounded-full bg-green-300 text-green-800 p-5']"  style="font-size: 2rem;" ></i>
      <p class="text-xl text-green-800 font-bold">  {{ title }} </p> 
      <p> {{ description }} </p>
    </div>
    <div class="flex items-center justify-center gap-2 pb-5">
      <Button label="Doar"/>
      <Button label="Conhecer" style="background-color: white; color: green;"/>
    </div>
  </div>
</template>

<script>
import { Button } from 'primevue';

export default{
  props: ['icon', 'title', 'description'],
  components: {
    Button
  }
}
</script>