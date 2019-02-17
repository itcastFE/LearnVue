<template>
  <div>
    当前值为：<el-tag type="danger">{{$store.state.count}}</el-tag>
    <el-button @click="decrementAtion">-1</el-button>
    {{evenOrOdd}}
  </div>
</template>
<script>
// mapMutations是一个函数，可以获取多个mutations
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'decrement'
    ]),
    ...mapActions([
      'decrementAtion'
    ])
  },
  computed: {
    ...mapGetters([
      'evenOrOdd'
    ])
  }
}
</script>

<style>

</style>
