
<template>
  <div class="about">
    <h1>Register page</h1>
    <input type="email" v-model="email" name="email" placeholder="Email">
    <input type="password" v-model="password" name="password" placeholder="Password"><br>
    <button @click="register"> Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'emailtesting@gmail.com',
      password: 124
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
