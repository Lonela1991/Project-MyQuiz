<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Question from '../components/Question.vue';
import AnswerOptions from '../components/AnswerOptions.vue';
import Score from '../components/Score.vue';


const router = useRouter();

const questions = ref(null);
const selectedAnswer = ref(null);
const correctAnswers = ref(0);
const currentQuestionIndex = ref(0);
const quizFinished = ref(false);

function decodeHTML(html) {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
async function fetchQuestion() {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple'
    );

    if (!response.data || !response.data.results) {
      throw new Error('Ogiltig API respons');
    }
    console.log(response.data.results);

    questions.value = response.data.results.map((result) => ({
      question: decodeHTML(result.question),
      correctAnswer: decodeHTML(result.correct_answer),
      answerOptions: shuffle([
        decodeHTML(result.correct_answer),
        decodeHTML(result.incorrect_answers[0]),
        decodeHTML(result.incorrect_answers[1]),
        decodeHTML(result.incorrect_answers[2]),
      ]),
    }));
    return questions;
  } catch (error) {
    console.error('Fel vid fetchandet av quiz data:', error);
  }
}

onMounted(() => {
  fetchQuestion();
});

const currentQuestion = computed(
  () =>   questions.value && questions.value.length > 0 ? questions.value[currentQuestionIndex.value] : null
);

function handleNextQuestion() {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
    selectedAnswer.value = null;
  } else {
    quizFinished.value = true;
    router.push({
      name: 'PlayerRegistration',
      query: {
        result: correctAnswers.value,
        total: questions.value.length,
      },
    });
  }
}
</script>

<template>
  <section
    class="quiz-section"
    v-if="questions && questions.length > 0"
  >
    <Question :question="currentQuestion.question" />

    <AnswerOptions
      :answers="currentQuestion.answerOptions"
      :selectedAnswer="selectedAnswer"
      :correctAnswer="currentQuestion.correctAnswer"
      @updateSelectedAnswer="(choice) => (selectedAnswer = choice)"
      @updateCorrectAnswers="() => correctAnswers++"
      @nextQuestion="handleNextQuestion"
    />

    <Score
      :correctAnswers="correctAnswers"
      :numberOfQuestions="currentQuestionIndex"
    />
  </section>
  <section
    id="loading-page"
    v-else
  >
    <p>Laddar frågor ...</p>
  </section>
</template>
<style>
.quiz-section {
  padding: 2rem 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background-color: #a4196f;
  max-width: 360px;
}

#loading-page {
  margin-top: 10rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
</style>
