<template>
  <div class="home">
    <Com msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Com from '@/components/Home/index.vue'
export default {
  name: 'Home',
  components: {
    Com
  }
}
</script>
