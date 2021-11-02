<template>
    <div class="header">
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Tab Tracker</a>
                <ul class="navbar-nav navbar-center mr-auto ' ">
                    <li class="nav-item">
                            <router-link class="router__link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
            <router-link class="router__link" to="/register">Register</router-link>
            <router-link class="router__link" to="/login">Login</router-link>
        </nav>
        <router-view/>
    </div>

</template>

<script>
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
</style>
