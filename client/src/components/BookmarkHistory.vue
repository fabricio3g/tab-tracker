<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col"><b>Bookmarks</b></th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Artist</th>
        <th scope="col">View Song</th>
      </tr>
    </thead>
    <tbody  v-for="song in songs" :key="song.id" >
      <tr>
        <td>{{song.Song.title}}</td>
        <td>{{song.Song.artist}}</td>
        <td> <button class="btn" @click.prevent="navegateTo({name: 'song', params: { songId: song.Song.id} })">Go</button></td>
      </tr>
    </tbody>
    <nav class="navegation" aria-label="navigation">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </table>
</template>
<script>
import BookmarkServices from '../services/BookmarkServices'
export default {
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    console.log(this.$store.state.user.id)
    const data = (await BookmarkServices.index({
      userId: this.$store.state.user.id
    })).data
    this.songs = data
  },
  methods: {
    navegateTo (obj) {
      this.$router.push(obj)
    }
  }

}
</script>

<style scoped>
    .btn{
        color:black;
        border: .5px solid rgb(201, 201, 201);
    }
    .table{
      margin: 10px auto;
      width: 800px;
    }
    .pagination > li{
        border: 1px solid rgb(197, 197, 197);
        padding: 1px;
        margin: 2px;
    }

    @media (max-width: 767px){
    .table{
      width: 300px !important;
    }
  }
</style>
