<template>
  <div class="content">
    <div class="paper">
      <h1 class="view-title"> {{paper.title}} </h1>
      <p class="authors"> {{paper.author}} </p>
      <p class="venue"> {{paper.venue}}, {{paper.year}} </p>
      <div class="ext-buttons">
        <b-button class="ext-button" v-if="paper.doi.length> 0" :href="`https://doi.org/${paper.doi}`" target="_blank"> DOI </b-button>
        <b-button class="ext-button" v-if="paper.full_text.length> 0" :href="paper.full_text" target="_blank"> PDF </b-button>
        <b-button class="ext-button" v-if="paper.slides.length> 0" :href="paper.slides" target="_blank"> SLIDES </b-button>
      </div>
      <h2 class="abs"> Abstract </h2>
      <p class="abstract"> {{paper.abstract}} </p>
    </div>
  </div>
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
@media (min-width: 769px) {
  .paper{
    max-width: 1100px;
    margin: auto;
  }
}
.paper{
  text-align: left;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 1.2em;
  bottom: 0px !important;
}
.abs{
  font-size: 28px;
}
.abstract{
  margin-bottom: 0px;
  padding-bottom: 4em;
}
.authors{
  font-size: 20px;
}
.venue{
  font-size: 20px;
  font-weight: bold;
  color: #697878 ;
}
.ext-buttons{
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.ext-button{
  border-radius: 10px;
  margin-right: 1em;
  color: #1abab5 !important;
  border-color: #1abab5;
  background-color: white;
  border: 2.5px solid;
  font-weight: 600;
}
.ext-button:hover, .ext-button:active, .ext-button:focus{
  color: white !important;
  background-color: #1abab5 !important;
  border-color: #1abab5 !important;
  box-shadow: none;
}
</style>
