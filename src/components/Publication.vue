<template>
  <div class="publication">
    <h3 class="publication-title"><a :href="publication.link" target="_blank"> {{publication.title}} </a></h3>
    <p class="publication-author">{{publication.author}}</p>
    <p class="publication-venue">{{publication.venue}}, {{publication.year}}</p>
  </div>
</template>

<script>
export default {
  name: 'Publication',
  props: ["publication"]
}
</script>

<style scoped>
a{
  color: #1abab5 !important;
}
a:hover{
  color: #12a39f !important;
}
.publication-author{
  margin-top: 0;
  margin-bottom: 0.2em;
}
.publication-venue{
  margin-bottom: 2em;
}
</style>
