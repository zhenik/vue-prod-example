<template>
  <div id="user-page">
    <h2>User page</h2>
    <user-card :user="currentUser"></user-card>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import UserCard from "@/components/UserCard"

  export default {
    name: 'Other',
    components: {
      UserCard
    },
    computed: {
      ...mapGetters(["currentUser"]),
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
