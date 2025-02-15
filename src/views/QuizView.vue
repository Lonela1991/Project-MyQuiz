<script setup>
import axios from 'axios'
import { ref, computed} from 'vue'

const questions = ref(null)
const selectedAnswer = ref(null)

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


const currentQuestionIndex = ref(0)
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])

function myAnswer(answer) {
  selectedAnswer.value = answer
 
  if (answer === currentQuestion.value.correctAnswer) {
    console.log(`Du svarade rätt! Det rätta svaret på frågan är ${currentQuestion.value.correctAnswer}`)
  }
  else {
    console.log(`Du svarade ${answer} och det rätta svaret på frågan är ${currentQuestion.value.correctAnswer}`)

  }
  setTimeout(() => {
  selectedAnswer.value = null
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
  }
  }, 1000)
}

function getAnswerColor(answer) {
  if (!selectedAnswer.value) return 'white'
  return answer === currentQuestion.value.correctAnswer
  ? 'green' 
  : answer === selectedAnswer.value 
  ? 'red' 
  : 'white'
  
}

</script>

<template>
  <template v-if="questions && questions.length > 0">
    <section class="question-section">
      <h2 class="questionText"> {{ currentQuestion.question }}</h2>
    </section>
    <section class="answer-section">
      <div class="answer-box" @click="myAnswer(answer)"
        v-for="(answer, idx) in currentQuestion.answerOptions" :key="idx" :style="{backgroundColor: getAnswerColor(answer)}">
        <p class="answer-option">{{ answer }}</p>
      </div>
    </section>
  </template>
</template>

<style scoped>
.question-section {
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-inline: auto;
  border-radius: 1%;
  width: 96%;
  min-height: 120px;
  line-height: 50px;
  text-align: center;
  color: black;
}

.question-text {
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
}

.answer-section {
  display: flex;
  background-color: #a4196f;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  border-radius: 1%;
  height: 600px;
  margin: 2%;
  width: 96%;
}

.answer-box {
  background-color: white;
  border: 1px black;
  height: 20%;
  width: 90%;
  border-radius: 1%;
  line-height: 100px;
  text-align: center;
}

.answer-option {
  color: black;
  display: inline-block;
  vertical-align: middle;
}
</style>
