<template>
  <div class="teaching">
    <h1 class="view-title">Teaching</h1>
    <div v-for="course in courses" :key="course.id">
      <Course :course="course" />
    </div>
  </div>
</template>

<script>
import Course from '@/components/Course.vue'
import json from '../json/teaching.json'

export default {
  name: 'Teaching',
  title: 'Giorgia Nadizar - Teaching',
  components: {
    Course
  },
  data() {
    return {
      courses: []
    }
  },
  created() {
    this.courses = [...json].sort((a,b) => b.year - a.year);
  },
}
</script>