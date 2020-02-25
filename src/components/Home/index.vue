<template>
  <div>
    <!-- 与 vuex 的交互，使用 controller -->
    <div>{{ this.$store.state.num }}</div>
    <button @click="add">加一下-vuex</button>
    <button @click="minus">减一下-vuex</button>
    <!-- 依赖于网络的数据，使用 controller -->
    <div>{{ list }}</div>
    <!-- 父子组件交互，不需要 controller -->
    <Child @addFromChild="handleClick" />
    <div>{{ num }}</div>
    <!-- 组件内部的交互，即数据仅仅局限于自身组件，不需要 controller -->
    <div>
      <input v-model="input" />
    </div>
    <div>{{ input }}</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable  */
import Child from './Child.vue'
import Controller from './Controller'
const controller = Controller.getSingleton()

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Child
  },
  data() {
    return {
      controller: null,
      input: '',
      list: null,
      num: 0
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    add() {
      controller.add()
    },
    minus() {
      controller.minus()
    },
    async getList() {
      this.list = await controller.getList()
    },
    handleClick() {
      this.num++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
