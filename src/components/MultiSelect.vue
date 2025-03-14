
<template>
  <div class="card flex justify-center">
      
  </div>
</template>

<script>
import MultiSelect from 'primevue/multiselect';

export default {
  componente: {
    MultiSelect
  },
  data() {
      return {
          selectedCities: null,
          cities: [
              { name: 'New York', code: 'NY' },
              { name: 'Rome', code: 'RM' },
              { name: 'London', code: 'LDN' },
              { name: 'Istanbul', code: 'IST' },
              { name: 'Paris', code: 'PRS' }
          ]
      };
  }
};
</script>
