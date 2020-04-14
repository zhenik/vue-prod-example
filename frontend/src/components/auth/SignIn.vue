<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="submit">
        <div class="input">
          <label for="email">User</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  autocomplete="on"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({
      error: "error",
      loading: "loading",
    }),
  },
  watch: {
    // }===|==>---- only when user authenticated and then authorized
    // auth(yes) {
    //   if (yes) this.$router.push('/');
    // }
  },
  methods: {
    submit () {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch('signUserIn', payload);
    }
  }
}
</script>

<style scoped>
  #signin {
    margin: 10px;
  }
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    /*color: #4e4e4e;*/
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #8d8d8d;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #123495;
    background-color: #ffffff;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #123495;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>
