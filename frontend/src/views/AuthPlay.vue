<template>
  <div id="auth-play-page">
    <h2>Auth play view page</h2>
    <sign-in></sign-in>
    <test-auth></test-auth>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import SignIn from "../components/auth/SignIn";
  import TestAuth from "../components/auth/TestAuth";

  export default {
    name: 'AuthPlay',
    components: {
      SignIn,
      TestAuth
    },
    computed: {
      ...mapGetters(["user"]),
    },
  }
</script>

<style scoped>
  #user-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
