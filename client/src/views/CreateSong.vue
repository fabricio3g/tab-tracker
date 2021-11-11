
<template>
    <div class="container-fluid row create__song">
    <Panel title='Song metadata' class="col-6 col-md-4">
        <form class="from-group">
            <input type="text" class="form-control" v-model="song.title" name="title" placeholder="Title"><br>
            <input type="text" class="form-control" v-model="song.artist" name="artist"  placeholder="Artist"><br>
            <input type="text" class="form-control" v-model="song.genere" name="genere" placeholder="Genere"><br>
            <input type="text" class="form-control" v-model="song.album" name="album" placeholder="Album"><br>
            <input type="text" class="form-control" v-model="song.albumImage" name="albumImage" placeholder="Album Image Url"><br>
            <input type="text" class="form-control" v-model="song.youtubeId" name="youtubeId" placeholder="Youtube ID"><br>
            <button class="btn btn-primary" @click.prevent="createSong">Create Song</button>
        </form>
    </Panel>
    <Panel title='Song structure' class="col-12 col-md-8">
        <form class="from-group">
            <div class="form-group">
                <textarea class="form-control"  v-model="song.lyric" rows="8" placeholder="Lyric..."></textarea>
                <textarea class="form-control"  v-model="song.tab" rows="8" placeholder="Tab..."></textarea>
            </div>
        </form>
    </Panel>
    </div>
</template>

<script>
import SongServices from '../services/SongServices'
import Panel from '../components/Panel.vue'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genere: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyric: null,
        tab: null,
        userId: this.$store.state.user.id
      }
    }
  },
  methods: {
    async createSong () {
      try {
        console.log(this.song)
        await SongServices.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
    .create__song{
        margin: 0 1rem 1rem 0;
    }
</style>
