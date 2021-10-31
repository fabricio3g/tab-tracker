
<template>
  <div class="about">
    <h1>Register page</h1>
    <input type="email" v-model="email" name="email" placeholder="Email"><br>
    <input type="password" v-model="password" name="password" placeholder="Password"><br>
    <div class="error" v-html="error"></div>
    <button @click="register"> Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'emailtesting@gmail.com',
      password: 124,
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
  .error{
    color: red;
  }
</style>
