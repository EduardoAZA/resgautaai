<template>
    <template v-for="(dog, intId) in dogs" :key="intId">
      <Card class="m-5 flex flex-col">
        <template #content>
          <div class="overflow-hidden">
            <!-- Garantir que a imagem ocupe toda a div -->
            <img :src="dog.img" class="w-full h-[270px] object-cover rounded-md border-2 border-black" />
          </div>
        </template>
        <template #footer>
          <p><span class="font-bold">Nome:</span> {{ dog.name }}</p>
          <p><span class="font-bold">Raça:</span> {{ dog.raca }}</p>
          <p><span class="font-bold">Bairro:</span> {{ dog.bairro }}</p>
          <p><span class="font-bold">Descrição:</span> {{ dog.descricao }}</p>
        </template>
      </Card>
    </template>
</template>

<script>
import Card from 'primevue/card';

export default {
  props: {
    dogs: {
      type: Array,
      required: true
    }
  },
  components: {
    Card
  }
}
</script>

