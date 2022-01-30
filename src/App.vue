<template>
  <div id="app">
    <!-- main menu -->
    <b-navbar toggleable="md" sticky class="navbar-expand-md" >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="navbar-items">
        <b-navbar-nav >
          <b-nav-item class="custom-item" to="/biography">Biography</b-nav-item>
          <b-nav-item class="custom-item" to="/publications">Publications</b-nav-item>
          <b-nav-item class="custom-item" to="/cv">Cv</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- website content -->
    <router-view/>

    <!-- footer -->
    <div class="footer">
      <p class="footer-text"> &copy; 2022, Giorgia Nadizar.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  background-color: #f5fafa !important;
  position: relative;
  min-height: 100%;
  min-height: 100vh;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media (min-width: 769px) {
  .main, .navbar-items, .paper{
    max-width: 1200px;
    margin: auto;
  }
}
@media (max-width: 768px){
  .content-column{
    margin-top: 2em;
  }
}
.main{
  margin-top: 1.2em;
}
.content-column{
  text-align: left;
  margin-bottom: 3em;
}
.navbar-expand-md{
  background-color: 	#1abab5;
  font-size: 1.2em;
  font-weight: bolder;
}
.custom-item{
  margin-right: 1em;
  margin-left: 1em;
}
.navbar-light .navbar-nav .nav-link{
  color: #daf5f5  !important;
}
.navbar-light .navbar-toggler{
  color: #daf5f5 !important;
  border-color: #daf5f5 !important;
}
.navbar-light .navbar-nav .nav-link:hover{
  color: white !important;
  transform: scale(1.05);
}
.navbar-light .navbar-toggler-icon{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='%23daf5f5' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}
a{
  color: #1bccc6 !important;
}
a:hover{
  color: #1abab5 !important;
}
.view-title{
  margin-bottom: 0.7em;
}
.content{
  height: auto !important;
}
.footer{
  position: absolute;
  width: 100%;
  clear: both;
  bottom: 0;
  height: auto;
  background: #cce3e3;
  margin-top: 3em;
}
.footer-text{
  margin-top: 0.5em;
}
</style>
