
<template>
  <div class="register">
    <form class="form-group">
      <h3 class="register-title">Register</h3>
      <label for="exampleInputEmail1">Email address:</label>
      <input type="email" class="form-control" v-model="email" name="email" placeholder="Email"><br>
      <label for="exampleInputEmail1">Passowrd:</label>
      <input type="password" class="form-control" v-model="password" name="password" placeholder="Password"><br>
      <div class="error" v-html="error"></div>
      <button type="button" class="btn btn-primary" @click.prevent="register"> Register</button>
    </form>
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
    async register () {
      try {
            const response = await AuthenticationService.register({
           email: this.email,
           password: this.password
          })
        console.log(response.data)
        
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.token)
        
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
