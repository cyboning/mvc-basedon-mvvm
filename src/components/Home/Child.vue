<template>
  <button @click="handleClick">加一（子组件控制）</button>
</template>

<script>
/* eslint-disable  */
export default {
  methods: {
    handleClick() {
      this.$emit('addFromChild')
    }
  }
}
</script>
