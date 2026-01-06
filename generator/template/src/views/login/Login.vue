<template lang="pug">
#Login
  LoginForm
</template>
<script>
import LoginForm from 'app-plugin/components/LoginForm'
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="sass" scoped>
#Login
  +simpleLogin
</style>
