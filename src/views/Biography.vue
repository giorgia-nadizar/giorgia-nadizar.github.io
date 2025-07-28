<template>
  <div class="biography">
    <h1 class="view-title">Biography</h1>
    <p>
      I am a PostDoctoral Research Fellow in the
      <a target="_blank" href="https://erallab.inginf.units.it/"
        >"Evolutionary Robotics and Artificial Life Lab"</a
      >,
      <a target="_blank" href="https://www.units.it/">University of Trieste</a>,
      working under the supervision of
      <a target="_blank" href="https://medvet.inginf.units.it/"
        >Prof. Eric Medvet</a
      >.
    </p>

    <p>
      My research interests lie at the intersection of embodied AI and
      explainable/interpretable AI. Namely, my goal is to find robotic
      controllers which can be effective while remaining directly human
      intelligible. My current approach to the problem relies on the use of
      different nuances of Genetic Programming, but I am always open to explore
      new paths.
    </p>

    <p>
      I earned my Ph.D. at the University of Trieste but my academic journey has
      allowed me to experience
      <a target="_blank" href="/research-trips">several research environments</a
      >.
    </p>

    <Timeline />
  </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
export default {
  title: "Giorgia Nadizar",
  components: {
    Timeline,
  },
};
</script>
