<template>
  <ul class="social-icons">
    <li class="social-icon" v-for="icon in icons" v-bind:key="icon.id">
      <a :href="icon.link">
        <v-icon  :name="icon.icon" class="custom-icon"/>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialIcons',
  data() {
    return {
      icons: [
        { id: 1, icon: "envelope", link: "mailto:giorgia.nadizar@gmail.com" },
        { id: 2, icon: "graduation-cap", link: "https://scholar.google.com/citations?user=TWbaiVMAAAAJ&hl=it" },
        { id: 3, icon: "brands/twitter", link: "https://twitter.com/GNadizar" },
        { id: 4, icon: "brands/github", link: "https://github.com/giorgia-nadizar" }
      ]
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  margin: auto;
  display: flex;
  justify-content: center;
}
.social-icons{
  text-align: center;
  padding: 0 0 0 0;
}
.social-icon {
  display: inline-block;
  text-align: center;
  transition: transform .2s;
}
.fa-icon {
  width: auto;
  height: 2.2em;
  max-width: 100%;
  max-height: 100%;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.social-icon:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
