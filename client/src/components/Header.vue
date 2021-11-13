<template>
    <div class="header">
        <nav class="navbar navbar-dark bg-dark">
            <a  style="margin:15px;" class="navbar-brand" href="/"><img width="50" src="../assets/guitar-pick-pick.svg" style="path{
                fill:#fff;
            }" alt="">&#160;&#160;TAB TRACKER</a>
            <div class="drop-down">
            <button class="humburger_button" @click="dropdownMenu" >&#x2630;</button>
              <div class="dropdown-content dropdown-content-show" id="dropdown-content">
                <router-link  class="btn btn-info router__link" to="/songs">Browse</router-link>
                <router-link v-if="this.$store.state.isUserLogIn" class="btn btn-info  router__link" to="/bookmarkhistory">Bookmark History</router-link>
                <router-link  v-if="!this.$store.state.isUserLogIn" class="router__link btn btn-primary" to="/register">Register</router-link>
                <router-link  v-if="!this.$store.state.isUserLogIn" class="router__link btn btn-secondary" to="/login">Login</router-link>
                <router-link  v-if="this.$store.state.isUserLogIn"  @click="logout"  class="router__link btn btn-secondary" to="/" >Log out</router-link >
              </div>
            </div>
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
    },
    dropdownMenu () {
      const element = document.getElementById('dropdown-content')
      element.classList.toggle('dropdown-content-show')
    }
  }
}
</script>

<style scoped>
    .router__link{
        text-decoration: none;
        display: block;
        margin: 1rem;
    }
    .router__link:hover{
        text-decoration: none;
        display: block;
    }
    .nav_singin_register{
        display: flex;
    }
    .humburger_button{
        display: none;
        padding: .5rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border: none;
        border-radius: .5rem;
    }
    .dropdown-content{
        display: flex;
        align-items: center;
        border-radius: .5rem;
        /* background-color: #ffffff; */
        margin: .5rem;
    }
    img{
     filter: brightness(0) invert(1);
    }
    .navbar{
        width: 100%;
    }
    @media (max-width: 767px) {
        .humburger_button{
            display: flex;
            position: sticky;
        }
        .drop-down{
            display: inline-block;
            background: none;
            border: #ffffff;
            border-radius: .5rem;
            padding: 2rem;
        }
        .dropdown-content{
            display: none;
            padding: 12px 16px;
            flex-direction: column;
            position: absolute;
            background: #ffffff;
            transform: translateX(-150px);
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            min-width: 160px;
        }
        .navbar{
            display: flex;
            flex-wrap: nowrap;
        }
        .dropdown-content-show{
            display: block !important;
        }
    }
</style>
