<template>
  <div class="cv">
    <h1 class="view-title">Cv</h1>
    <div v-for="item in items" :key="item.title">
      <h2>{{item.title}} <v-icon :name=item.icon class="title-icon"/></h2>
      <ul>
        <li v-for="event in item.events" :key="event.id">
          {{event.name}}, {{event.location}}, {{event.time}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import json from '../json/cv.json'
export default {
  name: 'Cv',
  title: 'Giorgia Nadizar - CV',
  data() {
    return {
      items : json
    }
  }
}
</script>

<style>
.title-icon{
  vertical-align: top;
  width: auto;
  height: 1.1em;
}
</style>
