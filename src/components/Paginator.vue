<template>
  <Paginator 
    :rows="10" 
    :totalRecords="120" 
    :rowsPerPageOptions="[10, 20, 30]"
  >
  </Paginator>
</template>

<script>
import Paginator from 'primevue/paginator';

export default{ 
  components: {
    Paginator
  }
}
</script>