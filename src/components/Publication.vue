<template>
  <div class="publication">
    <h2> <v-icon  :name="publication.icon" class="info"/> {{publication.title}} </h2>
    <h3> {{publication.author}} </h3>
    <p> {{publication.venue}}, {{publication.year}} </p>
  </div>
</template>

<script>
export default {
  name: 'Publication',
  props: ["publication"]
}
</script>

<style>

</style>
