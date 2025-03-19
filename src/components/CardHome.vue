<template>
  <Card class="max-w-[400px]" style="border-radius: 0.5rem" >
    <template #title>
      <div class="flex flex-col items-center justify-center space-y-4 text-green-800">
        <i :class="icon" style="font-size: 2rem; padding-bottom: 1rem;"></i>
        {{ title }}
      </div>
    </template>
    <template #content>
        <p class="text-center">
            {{ subtitle }}
        </p>
    </template>
    <template #footer>
      <div class="flex items-center justify-center gap-2"> 
        <p class="text-green-700"> Saiba Mais </p> 
        <i class="pi pi-angle-down text-green-700" ></i>
      </div>
    </template>
  </Card> 
</template>

<script>
import { Card } from 'primevue';

export default{
  components: {
    Card
  },
  props: ['icon','title','subtitle']
}
</script>