<template>
  <div class="content">
    <b-container class="main">
      <b-row>
        <b-col md=4 sm=12> <Header/> </b-col>
        <b-col md=8 sm=12 class="content-column"> <router-view/> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Main',
  components: {
    Header
  }
}
</script>
