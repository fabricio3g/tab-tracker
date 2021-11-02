
<template>
  <div class="register form-group">
    <h3 class="register-title">Login</h3>
    <label for="exampleInputEmail1">Email address:</label>
    <input type="email" class="form-control" v-model="email" name="email" placeholder="Email"><br>
    <label for="exampleInputEmail1">Passowrd:</label>
    <input type="password" class="form-control" v-model="password" name="password" placeholder="Password"><br>
    <div class="error" v-html="error"></div>
    <button class="btn btn-primary" @click="login">Login</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'emailtesting@gmail.com',
      password: 123456789,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
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
  .register{
    margin: 0 auto;
    padding:1.5rem;
    width: 30rem;
  }
  .register-title{
    text-align: center;
  }
</style>
