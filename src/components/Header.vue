<template>
  <div id="side-panel">
    <b-avatar class="avatar-with-border" :src="require('../static/scholar.jpg')" size="10em"></b-avatar>
    <p id="name">Giorgia Nadizar</p>
    <p id="tagline">PhD student in Applied Data Science & Artificial Intelligence</p>
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
#name{
  margin-top: 0.1em;
  font-size: 3em;
}
#tagline{
  font-size: 1.2em;
  color: #697878
}
#side-panel {
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  margin: auto;
  text-align: center;
}
.avatar-with-border{
  background-color: white;
  padding: .2em;
}
.social-icon {
  display: inline-block;
  margin-right: 1em;
  font-size: 2em;
  text-align: center;
}
@media (min-width: 768px) {
  #side-panel{
    margin-right: 20px;
    top: 5em;
  }
  #tagline{
    margin-bottom: 1.3em;
  }
}
</style>
