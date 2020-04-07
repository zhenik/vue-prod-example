<template>
  <div class="card">
    <div class="card-body">
      <img src="../assets/dog.png" alt="Avatar">
      <h5 class="card-title">User</h5>
      <p class="card-text">Id: {{user.id}}</p>
      <p class="card-text">Name: {{user.name}}</p>
      <p class="card-text">Last name: {{user.lastname}}</p>
      <p class="card-text">Age: {{user.age}}</p>

      <button type="button"
              class="btn btn-primary"
              v-on:click="requestRandomUser"
      >Random user</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      requestRandomUser() {
        this.$store.dispatch("fetchRandomUser");
      }
    }
  }
</script>
<style scoped>
  .card {
    width: 18rem;
    background-color: #b2b93a;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
