<template>
  <div class="course">
    <h3 class="course-title">
      {{ course.name }}
    </h3>

    <p class="course-university">
      {{ course.university }}
    </p>

    <p class="course-details">
      {{ course.type }} — {{ course.role }}
    </p>

    <div class="course-meta">
      <b-badge variant="light">
        📅 {{ course.year }}
      </b-badge>

      <b-badge variant="light">
        {{ languageLabel }}
      </b-badge>

      <b-badge variant="light">
        ⏱️ {{ course.hours }} hours
      </b-badge>

      <b-badge v-if="course.link" variant="light">
        <a :href="course.link" target="_blank" rel="noopener noreferrer">
          📚 materials
        </a>
      </b-badge>
    </div>

    <p v-if="course.description" class="course-description">
      {{ course.description }}
    </p>

  </div>
</template>

<script>
export default {
  name: 'Course',
  props: ["course"],
  computed: {
      languages() {
        return this.course.language.split('/').map(lang => {
          const languages = {
            "IT": "🇮🇹",
            "EN": "🇬🇧",
            "FR": "🇫🇷"
          }

          return {
            name: lang.trim(),
            flag: languages[lang.trim()] || "🌐"
          }
        })
      },
      languageLabel() {
        return this.languages
          .map(language => `${language.flag} ${language.name}`)
          .join(' / ')
      }
    }
  }
</script>

<style scoped>
.course {
  margin-bottom: 2em;
}

.course-title {
  margin-bottom: 0.3em;
  color: #1abab5;
}

.course-university {
  margin-top: 0;
  margin-bottom: 0.2em;
  font-weight: bold;
}

.course-details {
  margin-top: 0;
  margin-bottom: 0.2em;
}

.course-meta {
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #697878;
}

.course-meta {
  margin-top: 0.5em;
  margin-bottom: 0.8em;
}

.course-meta .badge {
  margin-right: 0.4em;
  padding: 0.45em 0.7em;
  font-size: 0.9rem;
  font-weight: normal;
  border: 1px solid #697878;
  color: #697878;
  background-color: transparent;
}

.course-description {
  color: #697878;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.course-link a {
  color: #1abab5 !important;
}

.course-link a:hover {
  color: #12a39f !important;
}
</style>