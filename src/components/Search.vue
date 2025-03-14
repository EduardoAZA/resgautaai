<template>
  <IconField class="w-full">
    <InputIcon class="pi pi-search" />
    <InputText v-model="value1" placeholder="Procure por região" class="w-full" />
</IconField>
</template>

<script>

import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
export default{
  components: {
    InputText,
    IconField,
    InputIcon
  },

}
</script>

<style setup>

.font-size{
  font-size: 12px;
}
</style>