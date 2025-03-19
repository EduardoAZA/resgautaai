<template>
  <div class="bg-gradient-to-b from-green-50 to-blue-50">
    <div class="flex items-center justify-center flex-col container pt-20 py-10">
      <div class="text-center space-y-6 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold text-green-800"> Ajudando Animais, Transformando Vidas </h1>
        <p class="text-md md:text-2xl text-green-700">
          Juntos podemos fazer a diferença na vida dos animais que precisam de ajuda
        </p>
      </div>
      <div class="flex space-x-6 mt-10">
        <Button label="Quero Adotar" />
        <Button label="Como ajudar" style="background-color: white; color: green"/>
      </div>
      
      <div class="animate-bounce">
        <i class="pi pi-angle-down text-green-700" style="font-size: 2rem;  margin-top: 10rem;"></i>
      </div>
    </div>
  </div>

  <div class="mt-15 flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold text-center text-green-800">Como podemos ajudar</h1>

    <div class="flex md:flex-row justify-center flex-col mt-20 mb-20 gap-12">
      <CardHome icon="pi pi-search" title="Animais Perdidos" subtitle="Ajudamos a encontrar animas perdidos e reunir famílias. Cadastre seu animal ou ajude a encontrar um pet perdido."/>
      <CardHome icon="pi pi-heart" title="Adoção de Animais" subtitle="Encontre seu novo melhor amigo. Temos diversos animais esperando por um lar amoroso e responsável."/>
      <CardHome icon="pi pi-money-bill" title="Apoio a ONGs" subtitle="Ajude instituições que cuidam de animais abandonados com doações, voluntariado ou apadrinhamento."/>
    </div>
  </div>

  <div class="pt-15 bg-gradient-to-b from-green-50 to-blue-50">
    <div class="text-center space-y-6 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-center text-green-800"> Animais para Adoção </h1>
      <p class="text-md md:text-2xl text-green-700">
          Juntos podemos fazer a diferença na vida dos animais que precisam de ajuda
      </p>
      <div class="flex flex-col space-y-6s md:flex-row">
        <CardAdocao name="Nala" gender="Fêmea" age="2" description="Cachorra brincalhona e amigável. Costume de girar atrás do rabo."/>
        <CardAdocao name="Nala" gender="Fêmea" age="2" description="Cachorra brincalhona e amigável. Costume de girar atrás do rabo."/>
        <CardAdocao name="Nala" gender="Fêmea" age="2" description="Cachorra brincalhona e amigável. Costume de girar atrás do rabo."/>
      </div>
      <div>
        <Button class="mb-7" label="Ver Mais Animais" style="background-color: white;color: green;"/>
      </div>
    </div>
  </div>

  <div class="flex flex-col md:flex-row">
    <CardOng icon="pi pi-heart" title="Ajude Agora" description="Ajude nossa causa para salvar diversos animais que precisam da sua ajuda." />
    <CardOng icon="pi pi-heart" title="Ajude Agora" description="Ajude nossa causa para salvar diversos animais que precisam da sua ajuda." />
    <CardOng icon="pi pi-heart" title="Ajude Agora" description="Ajude nossa causa para salvar diversos animais que precisam da sua ajuda." />
  </div>

  <div class="bg-green-600 p- text-center space-y-6 pb-20 pt-20">
    <h1 class="text-3xl text-white font-bold">Junte-se a Nossa Causa</h1>
    <p class="text-lg text-white">Cada ajuda faz diferença. Seja voluntário, doe ou adote - há muitas maneiras de contribuir.</p>
    <div class="flex items-center justify-center gap-5">
      <Button label="Quero ajudar" />
      <Button label="Cadastrar Animal" />
    </div>
  </div>

  <div class="bg-green-800 p-5 pt-10 flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <h1 class="text-white font-bold">Sobre nós</h1>
      <p class="text-green-200">Trabalhamos para melhorar a vida dos animais através de adoção responsável, busca de animais perdidos e apoio a ONGs.</p>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-white font-bold">Links rápidos</h1>
      <ul class="text-green-200">
        <li>Adotar</li>
        <li>Animais Perdidos</li>
        <li>Apoiar ONGs</li>
        <li>Voluntariado</li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-white font-bold">Contato</h1>
      <ul class="text-green-200">
        <li>contato@ajudaanimais.org</li>
        <li>(11) 99999-9999</li>
        <li>Curitiba, PR</li>
      </ul>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import { Button } from 'primevue';
import CardHome from '../components/CardHome.vue';
import CardAdocao from '../components/CardAdocao.vue';
import CardOng from '../components/CardOng.vue';
import Card from '../components/Card.vue';

export default{
  components: {
    Button,
    CardHome,
    CardAdocao,
    CardOng
  }
}
</script>
