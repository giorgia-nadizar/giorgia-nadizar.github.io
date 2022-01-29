<template>
  <h1> {{paper.title}} </h1>
</template>

<script>
import json from '../json/publications.json'
import router from "../router"
export default {
  name: 'Publication',
  data(){
    return {
      paper : {}
    }
  },
  methods: {
    getPublication() {
      const filtered = json.filter((pub) => pub.id == this.$route.params.id);
      if(filtered.length == 0){
        router.push('/publications');
      }
      this.paper = filtered[0];
      document.title = this.paper.title;
    }
  },
  created() {
    this.getPublication();
  },
  updated() {
    this.getPublication();
  }
}
</script>

<style>

</style>
