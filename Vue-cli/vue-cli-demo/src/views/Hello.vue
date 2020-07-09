<template>
 <div>
    <img alt="Vue logo" src="../assets/logo.png">
     <demo msg="what i cannot create, i do not understand"></demo>
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