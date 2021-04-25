<template>
<div>
  <h1>如何使用vuex</h1>
  <hr>
  <counter></counter>
  <hr>
  <amount></amount>
</div>
</template>

<script>
import counter from '../vuex/Counter.vue'
import amount from '../vuex/Amount.vue'
export default {
  name: 'Vuex.vue',
  components:{
    counter,
    amount,
  }
};
</script>

<style scoped>

</style>
