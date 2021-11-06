<template>
    <div class="card">
        <div class="card-header" style="text-aling:center">{{title}}</div>
        <div class="card-body">
            <slot>
                No content at all
            </slot>
        </div>
    </div>
</template>
<script>
export default {
  props: ['title']
}
</script>

<style scoped>
    .card{
        margin:2rem auto;
        width: 500px;
    }

</style>
