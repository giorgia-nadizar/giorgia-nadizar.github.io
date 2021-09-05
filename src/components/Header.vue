<template>
  <div class="side-panel">
    <b-avatar class="avatar-with-border" :src="require('../static/scholar.jpg')" size="8rem"></b-avatar>
    <h1>Giorgia Nadizar</h1>
    <h2>PhD student wanna-be.</h2>
    <SocialIcons />
  </div>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue'
export default {
  name: 'Header',
  components: {
    SocialIcons
  }
}
</script>

<style scoped>
    .side-panel {
      position: sticky;
      position: -webkit-sticky;
      position: -moz-sticky;
      position: -ms-sticky;
      position: -o-sticky;
      top: 60px;
      border-right: solid 0.5px rgba(0,0,0,0.2);
      margin: auto;
      text-align: center;
    }
    .avatar-with-border{
      background-color: black;
      padding: .2em;
    }
    .social-icon {
      display: inline-block;
      margin-right: 1em;
      font-size: 2em;
      text-align: center;
    }
</style>
