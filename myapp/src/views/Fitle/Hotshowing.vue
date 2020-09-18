<template>
  <div>
      <list :list="$store.state.hotshowlist"></list>
  </div>
</template>
<script>
import list from '../Fitle/List'
export default {
  components: {
    list
  }
}
</script>
