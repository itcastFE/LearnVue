<template>
  <div>
    当前值为：<el-tag type="danger">{{$store.state.count}}</el-tag>
    <el-button @click="add">+1</el-button>
    {{$store.getters.evenOrOdd}}
  </div>
</template>
<script>
export default {
  methods: {
    add () {
      this.$store.commit('increment')
    }
  },
  mounted () {
    this.$store.dispatch('incrementAtion')
  }
}
</script>

<style>

</style>
