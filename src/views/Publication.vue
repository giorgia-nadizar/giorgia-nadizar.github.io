<template>
  <div class="content">
    <div class="paper">
      <h1 class="view-title"> {{paper.title}} </h1>
      <p class="authors"> {{paper.author}} </p>
      <p class="venue"> {{paper.venue}}, {{paper.year}} </p>
      <p class="notes" v-if="paper.notes.length> 0"> <v-icon v-if="paper.notes.length> 0" name="award" class="award"/> {{paper.notes}} </p>
      <div class="ext-buttons">
        <b-button class="ext-button" v-if="paper.doi.length> 0" :href="`https://doi.org/${paper.doi}`" target="_blank"> DOI </b-button>
        <b-button class="ext-button" v-if="paper.full_text.length> 0" :href="paper.full_text" target="_blank"> PDF </b-button>
        <b-button class="ext-button" v-if="paper.slides.length> 0" :href="paper.slides" target="_blank"> SLIDES </b-button>
        <b-button class="ext-button" v-if="paper.poster.length> 0" :href="paper.poster" target="_blank"> POSTER </b-button>
        <b-button class="ext-button" v-if="paper.video.length> 0" :href="paper.video" target="_blank"> VIDEO </b-button>
        <b-button class="ext-button" v-if="paper.code.length> 0" :href="paper.code" target="_blank"> CODE </b-button>
        <b-button class="ext-button" v-if="paper.cite_url.length> 0" :href="paper.cite_url" target="_blank"> CITE </b-button>
      </div>
      <h2 class="abs"> Abstract </h2>
      <p class="abstract" v-html="paper.abstract"></p>
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

      if(this.paper.cite.length>0){
        var blob = new Blob([this.paper.cite], {type: "text/plain;charset=utf-8"});
        var url = URL.createObjectURL(blob);
        this.paper.cite_url = url;
      }else {
        this.paper.cite_url = "";
      }
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
.notes{
  font-size: 20px;
  font-weight: bold;
  color: #12a39f ;
}
.award{
  width: auto;
  height: 1em;
  max-width: 100%;
  max-height: 100%;
}
.ext-buttons{
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.ext-button, .ext-button:active, .ext-button:focus{
  border-radius: 10px;
  margin-right: 1em;
  color: #1abab5 !important;
  border-color: #1abab5;
  background-color: white;
  border: 2.5px solid;
  font-weight: 600;
  box-shadow: none;
}
.ext-button:hover{
  color: white !important;
  background-color: #1abab5 !important;
  border-color: #1abab5 !important;
  box-shadow: none;
}
</style>
