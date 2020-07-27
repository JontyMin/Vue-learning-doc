<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <home meg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import home from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
