<template>
  <div class="side-panel">
    <b-avatar class="avatar-with-border" :src="require('../static/scholar.jpg')" size="8rem"></b-avatar>
    <h1>Giorgia Nadizar</h1>
    <h2>PhD student wanna-be.</h2>
    <ul class="social-icons">
      <li class="social-icon"> <font-awesome-icon icon="envelope" /></li>
      <li class="social-icon"> <font-awesome-icon icon="graduation-cap" /></li>
      <li class="social-icon"> <font-awesome-icon :icon="['fab', 'twitter']" /></li>
      <li class="social-icon"> <font-awesome-icon :icon="['fab', 'github']" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
    .social-icons{
      margin: auto;
      text-align: center;
    }
</style>
