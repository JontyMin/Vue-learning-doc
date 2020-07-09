<template>
 <div>
    <img alt="Vue logo" src="../assets/logo.png">
     <demo msg="这是我们的组件"></demo>
    <h1>这是hello页面</h1>
    <router-view>
      
    </router-view>
 </div>
</template>

<script>
// @ is an alias to /src
import demo from '@/components/demo'

export default {
  name: 'Hello',
  components: {
    demo
  }
}
</script>