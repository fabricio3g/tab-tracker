<template>
  <div class="card-container" >
      <Panel title='Song Metadata' class="song-metadata">
       <img class="card-img-top" v-bind:src="song.albumImage" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">{{song.title}}</h4>
          <p class="card-text">Artist: {{song.artist}}</p>
          </div>
          <div class="card-footer">
          <small class="text-muted">Genere: {{song.genere}}</small>
          <br>
          <button class="btn btn-primary" @click.prevent="editSong">Edit Song</button>
        </div>
      </Panel>
      <Panel title='Youtube' class="youtube">
            <iframe v-bind:src="`http://www.youtube.com/embed/${song.youtubeId}`"
            width="460" height="315" frameborder="0" allowfullscreen></iframe>
      </Panel>
      <Panel title='Tabs' class="tab">
          <textarea readonly class="form-control" v-model="song.tab"></textarea>
      </Panel>
      <Panel title='Lyric' class="lyric">
          <textarea readonly class="form-control song-control"  v-model="song.lyric"></textarea>
      </Panel>
  </div>
</template>

<script>
import Panel from '../components/Panel.vue'
import SongServices from '../services/SongServices'
export default {
  data () {
    return {
      song: {},
      songId: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    editSong () {
      console.log('Edit song clicked')
      this.$router.push({
        name: 'song-edit',
        params: { songId: this.songId }
      })
    }
  },
  async mounted () {
    const songId = await this.$store.state.route.params.songId
    this.songId = songId
    this.song = (await SongServices.show(songId)).data
  }
}
</script>

<style scoped>
  .card-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto;
    width: 90%;
    height: 100%;
    border: rgb(197, 197, 197) 1px solid;
    border-radius: .2rem;
    background: rgb(218, 218, 218);
  }
  .song-metadata{
    margin: 0;
    padding: 0;
    width: 300px;
    height: 550px;
  }
  .song-metadata,  .lyric, .tab{
    margin: 1rem;
    padding: 0;
  }
  textarea{
    height: 500px;
    font-family: monospace;
    background: transparent !important;
    overflow: auto;
    border-style:none;
    padding: 40px;
    width: 100%;
  }

  button{

  }

</style>
