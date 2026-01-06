<template lang="pug">
  router-view
  Panels
</template>
<script>
import { useQueryString } from 'app-plugin/utils/hooks'

export default {
  name: 'App',
  setup() {
    useQueryString()
    return {}
  },
}
</script>
<style lang="sass">
#app
  height: 100vh
</style>
