<template>
  <div id="app">
    <increment></increment>
    <decrement></decrement>
  </div>
</template>
<script>
import Increment from './views/Increment.vue'
import Decrement from './views/Decrement.vue'
export default {
  name: 'App',
  components: {
    Increment,
    Decrement
  }
}
</script>

<style>

</style>
