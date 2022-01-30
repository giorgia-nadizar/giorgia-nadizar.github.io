<template>
  <div class="publications">
    <h1 class="view-title">Publications</h1>
    <div v-for="publication in publications" :key="publication.id">
      <Publication :publication="publication" />
    </div>
  </div>
</template>

<script>
import Publication from '@/components/Publication.vue'
import json from '../json/publications.json'
export default {
  name: 'Publications',
  title: 'Giorgia Nadizar - Publications',
  components: {
    Publication
  },
  data() {
    return {
      publications : []
    }
  },
  created() {
    this.publications = json.sort((a,b) => (a.n > b.n) ? -1 : ((b.n > a.n) ? 1 : 0));
  },
}
</script>
