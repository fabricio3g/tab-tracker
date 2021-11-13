
<template>
    <Panel title='Register' class="register">
    <form class="form-group">
      <label> Email address:</label>
      <input type="email" class="form-control" v-model="email" name="email" placeholder="Email"><br>
      <label> Passowrd:</label>
      <input type="password" class="form-control" v-model="password" name="password" placeholder="Password"><br>
      <div class="error" v-html="error"></div>
      <button type="button" class="btn btn-primary" @click.prevent="register"> Register</button>
    </form>
  </Panel>
</template>

<script>
import Panel from '../components/Panel.vue'
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'correo@gmail.com',
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
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.token)
        this.$router.push({ path: '/login' })
      } catch (error) {
        this.error = error.response.data.error
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
  .error{
    color: rgb(255, 79, 79);
    font-family: 'Courier New', Courier, monospace;
    padding-bottom: 1rem;
  }
  .register{
    margin: 0 auto;
    padding:1.5rem;
    width: 30rem;
  }
  .register-title{
    text-align: center;
  }
  @media (max-width: 767px){
    .register{
      width: 80%;
    }
  }
</style>
