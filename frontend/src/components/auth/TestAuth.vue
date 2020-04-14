<template>
  <div id="checking-auth">
    <div class="user-state">
      <h2>Test auth component</h2>
      <h3>User state</h3>
      <p>{{user}}</p>
    </div>
    <div>
      <button type="button"
              class="btn btn-primary"
              v-on:click="authVerify"
      >Auth verify</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import 'firebase/auth';

  export default {
    computed: {
      ...mapGetters({
        user: "user",
      }),
    },
    methods: {
      authVerify() {
        this.$store.dispatch("authVerify")
      }
    }
  }
</script>
<style scoped>

</style>
