<script setup>
import { defineProps} from 'vue'

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
  display: flex;
  flex-direction: row;
  text-align: end;
 
  border-radius: 6px;
 
  
  color: white;
}



</style>
