<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col"><b>Recent Viewed songs</b></th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Artist</th>
        <th scope="col">View Song</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Feel Good</td>
        <td>Gorillaz</td>
        <td> <button class="btn">Go</button></td>
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
export default {

}
</script>

<style scoped>
    .btn{
        color:black;
        border: .5px solid rgb(201, 201, 201);
    }
    .pagination > li{
        border: 1px solid rgb(197, 197, 197);
        padding: 1px;
        margin: 2px;
    }
</style>
