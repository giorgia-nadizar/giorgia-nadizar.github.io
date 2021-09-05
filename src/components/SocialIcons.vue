<template>
  <ul class="social-icons">
    <li class="social-icon" v-for="icon in icons" v-bind:key="icon.id">
      <a :href="icon.link">
        <v-icon  :name="icon.icon" class="info"/>
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
        { id: 2, icon: "graduation-cap", link: "mailto:giorgia.nadizar@gmail.com" },
        { id: 3, icon: "brands/twitter", link: "mailto:giorgia.nadizar@gmail.com" },
        { id: 4, icon: "brands/github", link: "mailto:giorgia.nadizar@gmail.com" }
      ]
    }
  }
}
</script>

<style scoped>
.social-icon {
  display: inline-block;
  margin-right: 2em;
  text-align: center;
  transition: transform .2s;
}
.fa-icon {
  width: auto;
  height: 2em;
  max-width: 100%;
  max-height: 100%;
  margin-right: 3px;
  margin-left: 3px;

}
.social-icon:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
