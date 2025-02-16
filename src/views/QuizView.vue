<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
import Question from '../components/Question.vue'
import AnswerOptions from '../components/AnswerOptions.vue'
import Score from '../components/Score.vue'

const questions = ref(null)
const selectedAnswer = ref(null)
const correctAnswers = ref(0)
const currentQuestionIndex = ref(0)


function decodeHTML(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffle(array) {
  var currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

axios.get('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple')
  .then(response => {

    console.log(response.data.results)

    questions.value = response.data.results.map((result) => ({
      question: decodeHTML(result.question),
      correctAnswer: decodeHTML(result.correct_answer),
      answerOptions: shuffle([
        decodeHTML(result.correct_answer),
        decodeHTML(result.incorrect_answers[0]),
        decodeHTML(result.incorrect_answers[1]),
        decodeHTML(result.incorrect_answers[2]),
      ])
    }));
    return questions
  })


const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])

function handleNextQuestion(){
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    selectedAnswer.value = null
  }
}
</script>

<template>
  <template v-if="questions && questions.length > 0">
    <Question :question="currentQuestion.question" />

    <AnswerOptions 
    :answers="currentQuestion.answerOptions" 
    :selectedAnswer="selectedAnswer"
    :correctAnswer="currentQuestion.correctAnswer" 
    @updateSelectedAnswer="choice => selectedAnswer = choice"
    @updateCorrectAnswers="() => correctAnswers ++"
    @nextQuestion="handleNextQuestion"
    />

    <Score :correctAnswers="correctAnswers" :totalQuestions="questions.length" />
    
  </template>
  <template>
    <p>Laddar frågor...</p>
  </template>
</template>
