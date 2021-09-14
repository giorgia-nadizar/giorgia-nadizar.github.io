<template>
  <div id="app">
    <!-- main menu -->
    <b-navbar toggleable="md" sticky type="dark" class="navbar-expand-md" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="navbar-items">
        <b-navbar-nav >
          <b-nav-item to="biography">Biography</b-nav-item>
          <b-nav-item to="publications">Publications</b-nav-item>
          <b-nav-item to="cv">Cv</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- website content -->
    <b-container class="main">
      <b-row>
        <b-col sm=4 xs=12> <Header/> </b-col>
        <b-col sm=8 xs=12 class="content-column"> <router-view/> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}.content-column{
  text-align: left;
}
@media (min-width: 769px) {
  .main{
    max-width: 80%;
    margin: auto;
  }
  .navbar-items{
    max-width: 80%;
    margin: auto;
  }
}
</style>
