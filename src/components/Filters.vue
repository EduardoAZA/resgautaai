<template>
  <div>
    <InputText type="text" v-model="value" class="w-full" />
  </div>
</template>


<script>
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';

export default{
  components: {
    InputText,
    SelectButton
  },
  data() {
    return {
      value : null
    }
  }
}
</script>