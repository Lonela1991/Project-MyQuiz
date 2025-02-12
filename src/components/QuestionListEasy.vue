<script setup>
import axios from 'axios'
import { ref } from 'vue'

let questions = ref([])
 
 axios.get('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple')
  .then(function(response){
    console.log(response.data.results)

   questions.value = response.data.results.map((result) => ({
          question: result.question,
          correctAnswer: result.correct_answer,
          incorrectAnswers: result.incorrect_answers
      }));

      return questions

  })
</script>

<template>
    <h2>Easy Questions</h2>
    <template v-for="question in questions" :key="question">
     <dt>"Question: "{{question.question}}</dt>
     <dt>"Correct answer: "{{question.correctAnswer}}</dt> 
     <dt>"Incorrect answer: "{{question.incorrectAnswers}}</dt>
    </template>
</template>
