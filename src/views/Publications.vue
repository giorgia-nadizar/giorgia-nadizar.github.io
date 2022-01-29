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
      publications : json.reverse()
    }
  }
}
</script>
