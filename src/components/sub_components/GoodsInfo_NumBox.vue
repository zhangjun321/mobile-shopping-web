<template>

  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <label for="test"></label><input id="test" class="mui-input-numbox" type="number"
                                     value="1" @change="onChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>

</div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  name: 'GoodsInfo_NumBox.vue',
  mounted() {
    //初始化数字选择框组件
    mui('.mui-numbox').numbox()
  },
  methods:{
    onChanged(){
      // console.log(this.$refs.numbox.value)
      this.$emit('getCount',parseInt(this.$refs.numbox.value))
    }
  },
  props:['max'],
  watch:{
    //属性监听
    'max':function (newValue,oldValue){
      mui('.mui-numbox').numbox().setOption('max',newValue)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
