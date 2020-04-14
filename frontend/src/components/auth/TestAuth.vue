<template>
  <div id="checking-auth">
    <div class="user-state">
      <h2>Test auth component</h2>
      <h3>User state</h3>
      <p>{{user}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters({
        user: "user",
      }),
    },
  }
</script>
<style scoped>

</style>
