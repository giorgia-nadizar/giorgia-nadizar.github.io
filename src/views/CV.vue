<template>
  <div class="cv">
    <h1>CV</h1>
    <div v-for="item in items" :key="item.title">
      <h2>{{item.title}} <v-icon :name=item.icon class="info"/></h2>
      <ul>
        <li v-for="event in item.events" :key="event.name">
          {{event.name}}, {{event.location}}, {{event.time}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cv',
  data() {
    return {
      items : {
        education : {
          title: "Education",
          icon: "user-graduate",
          events: [
            {
              name : "PhD in Applied Data Science & Artificial Intelligence",
              location: "University of Trieste",
              time: "2021 (started)"
            },
            {
              name : "Master in Computer & Electronic Engineering",
              location: "University of Trieste",
              time: "2019-2021"
            },
            {
              name : "Bachelor in Computer & Electronic Engineering",
              location: "University of Trieste",
              time: "2016-2019"
            },
          ]
        },
        research : {
          title: "Research Experience",
          icon: "robot",
          events : [
            {
              name : "Research Assistant",
              location: "Oslo Metropolitan University",
              time: "March-August 2021"
            },
            {
              name : "Intern",
              location: "Evolutionary Robotics & Artificial Lab (University of Trieste)",
              time: "March-May 2021"
            },
            {
              name : "Intern",
              location: "Operations Research Lab (University of Trieste)",
              time: "January-March 2019"
            },
          ]
        },
        conferences : {
          title: "Conferences Attended",
          icon: "users",
          events: [
            {
              name: "The Genetic and Evolutionary Computation Conference (GECCO)",
              location: "Lille (online)",
              time: "10-14 July 2021"
            }
          ]
        },
        schools : {
          title: "Schools Attended",
          icon: "school",
          events: [
            {
              name: "Summer School on Mathematical Methods in Computational Neuroscience",
              location: "Fred Kavli Science Center (Eresjord, Norway)",
              time: "28 July - 14 August 2021"
            },
            {
              name: "Cornell, Maryland, Max Planck Pre-doctoral Research School",
              location: "Max Planck Institute for Software Systems (Saarbruecken, Germany)",
              time: "3-9 August 2020"
            }
          ]
        }
      }
    }
  }
}
</script>
