
<template>
  <Panel title='Login'>
    <div class="login">
      <form class="form-group" autocomplete="off">
        <label for="exampleInputEmail1">Email address:</label>
        <input  type="email" class="form-control" v-model="email" name="email" placeholder="Email"><br>
        <label for="exampleInputEmail1">Passowrd:</label>
        <input type="password" class="form-control" v-model="password" name="password" placeholder="Password"><br>
        <div class="error" v-html="error"></div>
        <button class="btn btn-primary" @click.prevent="login">Login</button>
      </form>
    </div>
  </Panel>
</template>

<script>
import Panel from '../components/Panel.vue'
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'correo@gmail.com ',
      password: 123456789,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.token)
        this.$router.push({ path: '/' })
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
    color: red;
  }
</style>
