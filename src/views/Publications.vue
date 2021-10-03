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
export default {
  name: 'Publications',
  title: 'Giorgia Nadizar - Publications',
  components: {
    Publication
  },
  data() {
    return {
      publications : [
        {"id":"nadizar2021effects",
        "title":"On the Effects of Pruning on Evolved Neural Controllers for Soft Robots",
        "author":"G. Nadizar, E. Medvet, F.A. Pellegrino, M. Zullich, S. Nichele",
        "venue":"Workshop on Neuroevolution at Work (NEWK@GECCO)",
        "year":2021,
        "type":"conference",
        "link":"https://dl.acm.org/doi/abs/10.1145/3449726.3463161"}
      ]
    }
  }
}
</script>
