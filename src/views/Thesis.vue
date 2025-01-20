<template>
  <div class="content">
    <div class="paper">
      <h1 class="view-title"> Ph.D. thesis: Towards Bio-Inspired Interpretable Embodied Artificial Intelligence </h1>
      <p class="authors"> Giorgia Nadizar </p>
      <div class="ext-buttons">
        <b-button class="ext-button" href="https://drive.google.com/file/d/1_c3AeMaCmGaRDHA105KkT-yIiX_COL-Y/view?usp=sharing" target="_blank"> PDF </b-button>
      </div>
      <h2 class="abs"> Abstract </h2>
      <p class="abstract">
      Embodied Artificial Intelligence (AI) refers to the integration of AI systems within a (simulated) body, such as AI-controlled robots. This paradigm is inspired by biological organisms, aiming to replicate the dynamic interaction between intelligent behavior and a body. However, the resemblance to biological beings is frequently a coarse approximation, raising questions about the extent to which these systems genuinely capture biological principles. In addition, AI-controlled robots bring about concerns related to trust and transparency, particularly due to the inherent difficulty in understanding the underlying decision-making processes of these agents. In fact, people tend to trust AI systems more when they are transparent and interpretable. However, many AI models applied in robotic control, e.g., Artificial Neural Networks (ANNs), lack the necessary transparency, which makes them harder to trust. 
      <br>
      In this work, we focus on these two interrelated aspects of embodied AI: the enhancement of biological resemblance in AI-controlled robots and the improvement of their interpretability. We investigate these issues in the context of Modular Soft Robots (MSRs), which serve as an ideal test bed due to their inherent similarity to biological organisms. The first part of this work centers on increasing the biological fidelity in these embodied AI agents by experimenting with different ANN models that aim to mimic neural processes observed in nature, and by simulating biological phenomena, such as neural and morphological plasticity. In the second part of the study, we turn to the issue of interpretability, a key factor in ensuring that AI-controlled robots are trustworthy and reliable. Due to the highly subjective nature of interpretability, we first investigate the factors that contribute to the individual perceived interpretability of AI systems. We then design interpretable controllers for the robotic domain, starting with benchmark case studies involving rigid robots. Finally, we merge the two axes of investigation—biological resemblance and interpretability—by devising interpretable controllers for biologically inspired MSRs and comparing them against more complex neural controllers.
      <br>
      Our results show that (1) bio-inspiration can enhance the performance of embodied agents, (2) interpretability does not need to compromise performance, and (3) bio-inspiration and interpretability are not mutually exclusive, indicating that it is feasible to pursue a path towards bio-inspired interpretable embodied AI.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhD Thesis',
}
</script>

<style>
.paper{
  text-align: left;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 1.2em;
  bottom: 0px !important;
}
.abs{
  font-size: 28px;
}
.abstract{
  margin-bottom: 0px;
  padding-bottom: 4em;
}
.ext-buttons{
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.ext-button, .ext-button:active, .ext-button:focus{
  border-radius: 10px;
  margin-right: 1em;
  color: #1abab5 !important;
  border-color: #1abab5;
  background-color: white;
  border: 2.5px solid;
  font-weight: 600;
  box-shadow: none;
}
.ext-button:hover{
  color: white !important;
  background-color: #1abab5 !important;
  border-color: #1abab5 !important;
  box-shadow: none;
}
</style>
