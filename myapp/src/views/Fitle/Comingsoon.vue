<template>
  <div>
    <list :list="$store.state.cominglist"></list>
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
