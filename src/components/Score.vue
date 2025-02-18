<script setup>

const props = defineProps({
   correctAnswers: {
    type: Number,
    required: true
   },
   numberOfQuestions: {
    type: Number,
    required: true
   }
})


</script>
<template>
   <section class="correct-answers-section">
      <p class="correct-answers"> Antal rätt: {{ correctAnswers }} av {{numberOfQuestions}}</p>
    </section>
</template>

<style >
.correct-answers-section {
  margin-inline: auto;
  border-radius: 6px;
  width: 96%;
  min-height: 50px;
  line-height: 50px;
  text-align: right;
  color: white;
}

.correct-answers {
  padding-right: 5%;
}
</style>
