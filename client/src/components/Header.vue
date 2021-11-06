<template>
    <div class="header">
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Tab Tracker</a>
                <ul class="navbar-nav navbar-center mr-auto ' ">
                    <li class="nav-item">
                            <router-link class="router__link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="router__link" to="/songs">Browse</router-link>
                    </li>
                </ul>
            <router-link  v-if="!this.$store.state.isUserLogIn" class="router__link btn btn-primary" to="/register">Register</router-link>
            <router-link  v-if="!this.$store.state.isUserLogIn" class="router__link btn btn-secondary" to="/login">Login</router-link>
            <router-link  v-if="this.$store.state.isUserLogIn"  @click="logout"  class="router__link btn btn-danger" to="/" >Log out</router-link >
        </nav>
        <router-view/>
    </div>

</template>

<script>

export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      console.log(this.$store.sate)
    }
  }
}
</script>

<style scoped>
    .navbar-center{
        display:flex;
        flex-direction:row;
        justify-content: space-between;

    }
    .navbar-center > li{
         color: white;
    }
    .router__link{
        text-decoration: none;
        display: block;
        margin: 1rem;
        color: rgb(255, 255, 255) !important;
    }
    .router__link:hover{
        text-decoration: none;
        display: block;
        color: rgb(224, 221, 221) !important;
    }
    .nav_singin_register{
        display: flex;
    }
</style>
