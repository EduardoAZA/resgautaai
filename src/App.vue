<template>
    <Header/>
  <RouterView />
</template>

<script>
import Header from './components/Header.vue'

export default{ 
  components: {
    Header
  },
}
</script>


<style scoped>
</style>
