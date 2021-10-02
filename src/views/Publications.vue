<template>
  <div class="publications">
    <h1 class="view-title">Publications</h1>
    <div v-for="publication in publications" :key="publication.id">
      <Publication :publication="publication" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Publication from '@/components/Publication.vue'
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
    var parseResponse = function(data) {
      var cols = data.table.cols.map(
        ({label}) => label.replace(/[^A-Za-z0-9]+/g, ' ').toLowerCase().split(" ").join(""));
        return data.table.rows.map(function(r) {
          var entry = {};
          for (var i in r.c) {
            entry[cols[i]] = r.c[i]?r.c[i].v:undefined;
          }
          return entry;
        });
      }
      axios
      .get("https://docs.google.com/spreadsheets/d/1xuE0l_JiaCDmAYeL8lufvbbcIFW28AC4xKzHFGLTUR8/gviz/tq?tqx=out:json")
      .then((res) => (this.publications = parseResponse(JSON.parse(res.data.match(/(?<=.*\().*(?=\);)/s)[0]))))
      .catch((err) => console.log(err));
    }
}
</script>
