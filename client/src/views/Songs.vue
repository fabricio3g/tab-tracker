
<template>
    <div>
    <Panel title='Songs'>
       <router-link  v-if="this.$store.state.isUserLogIn"   class="router__link btn btn-primary" to="/song-create" >Create Song</router-link >
      <Panel title='Search' class="search">
        <input v-model="search" type="text" class="search__song" placeholder="Search by title...">
      </Panel>
        <div class="card-container">
              <div class="card card-song" v-for="song in songs" :key="song.id">
                <img class="card-img-top" v-bind:src="song.albumImage" alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">{{song.title}}</h4>
                    <p class="card-text">Artist: {{song.artist}}</p>
                  </div>
                  <div class="card-footer">
                  <small class="text-muted">Genere: {{song.genere}}</small><br>
                  <button class="btn btn-primary" @click.prevent="navegateTo({name: 'song', params: { songId: song.id} })">View</button>
            </div>
          </div>
          </div>
    </Panel>
    </div>
</template>

<script>
import Panel from '../components/Panel.vue'
import SongServices from '../services/SongServices'
export default {
  data () {
    return {
      songs: null,
      search: ''
    }
  },
  components: {
    Panel
  },
  async mounted () {
    // request songs to the backend
    this.songs = (await SongServices.index(this.search)).data
  },
  methods: {
    navegateTo (obj) {
      this.$router.push(obj)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
        this.songs = (await SongServices.index(value)).data
      }
    },
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
  .card{
    width: 70%;
  }
  .card-img-top{
    width: 200px;
  }
  .card-song{
    width: 200px;
    margin:1rem auto;
  }
  .card-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .search__song{
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    height: 3rem;
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid rgb(202, 202, 202);
  }
</style>
