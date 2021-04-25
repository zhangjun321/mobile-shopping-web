<template>
<div>
  <input type="button" value="减少" @click="decrease">
  <input type="button" value="增加" @click="increase">
  <br>
  <label>
    <input type="text" v-model="$store.state.count">
  </label>
</div>
</template>

<script>
export default {
name: "Counter.vue",
  data(){
  return{
    count:0
  }
  },
  methods:{
    increase(){
      //不推荐，不要这么用不符合vuex的设计理念
      // this.$store.state.count++
      this.$store.commit('increase')
    },
    decrease(){
      //不推荐，不要这么用不符合vuex的设计理念
      // this.$store.state.count--
      this.$store.commit('decrease',[1,2])
    },

  }
}
</script>

<style lang="scss" scoped>

</style>
