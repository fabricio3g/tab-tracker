
<template>
    <Panel title='Songs'>
        <router-link  v-if="this.$store.state.isUserLogIn"   class="router__link btn btn-primary" to="/song-create" >Create Song</router-link >
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
</template>

<script>
import Panel from '../components/Panel.vue'
import SongServices from '../services/SongServices'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    // request songs to the backend
    this.songs = (await SongServices.index()).data
  },
  methods: {
    navegateTo (obj) {
      this.$router.push(obj)
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
</style>
