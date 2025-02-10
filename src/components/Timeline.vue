<template>
  <!-- Section: Timeline -->
  <section class="py-5">
    <ul class="timeline-with-icons">
      <li v-for="event in events" :key="event.id" class="timeline-item mb-5">
        <span class="timeline-icon">
          {{ event.icon }}
        </span>

        <h5 class="fw-bold">{{ event.title }}</h5>
        <p class="text-muted mb-2 fw-bold">{{ event.date }}</p>
        <div v-html="event.description"></div>
      </li>
    </ul>
  </section>
  <!-- Section: Timeline -->
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      events: [
        {
          id: 1,
          icon: "🇳🇴",
          title:
            "Research Assistant at the Oslo Metropolitan University (Oslo)",
          date: "March 2021 - August 2021",
          description:
            "<p> Working with <a target='_blank' href='https://www.nichele.eu/'>Prof. Stefano Nichele</a>.</p>",
        },
        {
          id: 2,
          icon: "🇳🇱",
          title:
            "Ph.D. Internship at Centrum Wiskunde & Informatica (Amsterdam)",
          date: "November 2022 - January 2023",
          description:
            "<p> Working with <a target='_blank' href='https://marcovirgolin.github.io/'>Dr. Marco Virgolin</a>.</p>",
        },
        {
          id: 3,
          icon: "🇫🇷",
          title: "Research Visit at ISAE-Supaero (Toulouse)",
          date: "May 2023 - October 2023",
          description:
            "<p> Working with <a target='_blank' href='https://d9w.github.io/'>Dr. Dennis Wilson</a> supported by a SPECIES scholarship.</p>",
        },
        {
          id: 4,
          icon: "🇺🇸",
          title:
            "Research Visit at Massachusetts Institute of Technology (Boston)",
          date: "January 2024",
          description:
            "<p> Working in the <a target='_blank' href='https://alfagroup.csail.mit.edu/'>ALFA group</a>.</p>",
        },
        {
          id: 5,
          icon: "🇫🇷",
          title: "Research Visit at University of Toulouse Capitole (Toulouse)",
          date: "January 2024",
          description:
            "<p> Working with <a target='_blank' href='https://www.irit.fr/~Sylvain.Cussat-Blanc/index_en.php'>Prof. Sylvain Cussat-Blanc</a>.</p>",
        },
        {
          id: 6,
          icon: "🎓",
          title: "Ph.D. cum laude",
          date: "27th January 2025",
          description:
            "<p>Ph.D. in Applied Data Science and Artificial Intelligence from the University of Trieste.</p> <p>Supervisor: <a target='_blank' href='https://medvet.inginf.units.it/'>Prof. Eric Medvet</a> </p> <p>Thesis title: <a target='_blank' href='/#/thesis'>Towards Bio-Inspired Interpretable Embodied Artificial Intelligence</a> </p>",
        },
      ],
    };
  },
};
</script>

<style scoped>
.timeline-with-icons {
  border-left: 1px solid hsl(0, 0%, 90%);
  position: relative;
  list-style: none;
}

.timeline-with-icons .timeline-item {
  position: relative;
}

.timeline-with-icons .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline-with-icons .timeline-icon {
  position: absolute;
  left: -55px;
  background-color: #daf5f5;
  color: #12a39f;
  border-style: solid;
  border-color: #12a39f;
  border-radius: 50%;
  height: 31px;
  width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
