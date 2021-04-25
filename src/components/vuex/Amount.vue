<template>
<div>
<!--  获取的数量：{{$store.state.count}}-->
  {{$store.getters.optCounter}}
</div>
</template>

<script>
export default {
name: "Amount.vue"
}
</script>

<style scoped>

</style>
