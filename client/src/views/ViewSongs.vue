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
          <button v-if="isUserLogIn" class="btn btn-primary" @click.prevent="editSong">Edit Song</button>
          <button v-if="isUserLogIn && !this.isBookmarked" class="btn btn-dark" @click="bookmark">Bookmark</button>
          <button v-if="isUserLogIn && this.isBookmarked" class="btn btn-dark" @click="unbookmark">Unbookmark</button>
        </div>
      </Panel>
      <Panel title='Youtube' class="youtube">
            <!-- <iframe v-bind:src="`http://www.youtube.com/embed/${song.youtubeId}`"
            width="460" height="315" frameborder="0" allowfullscreen></iframe> -->
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
import BookmarkServices from '../services/BookmarkServices'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      song: {},
      songId: '',
      isBookmarked: null
    }
  },
  components: {
    Panel
  },
  computed: {
    ...mapState([
      'isUserLogIn'
    ])
  },
  methods: {
    editSong () {
      console.log('Edit song clicked')
      this.$router.push({
        name: 'song-edit',
        params: { songId: this.songId }
      })
    },
    async bookmark () {
      try {
        console.log('The bookmark button was clicked')
        this.isBookmarked = (await BookmarkServices.post({
          songId: this.songId,
          userId: String(this.$store.state.user.id)
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      console.log('Unbookmark was clicked')
      try {
        await BookmarkServices.delete({
          id: this.isBookmarked.id
        })
        this.isBookmarked = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    const showSongInfo = async () => {
      const songId = await this.$store.state.route.params.songId
      this.songId = songId
      this.song = (await SongServices.show(songId)).data
    }

    const findBookmark = async () => {
      console.log('Find book function')
      this.isBookmarked = (await BookmarkServices.index({
        songId: this.$store.state.route.params.songId,
        userId: this.$store.state.user.id
      })).data

      console.log(this.isBookmarked)
    }
    if (this.isUserLogIn) {
      showSongInfo()
      findBookmark()

      console.log(this.isBookmarked)
    }

    showSongInfo()
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
    height: 600px;
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
    width: 10rem;
    padding: 0;
    margin: .10rem auto;
    height: 2rem;
  }

</style>
