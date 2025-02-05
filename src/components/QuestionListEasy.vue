<script>
import axios from 'axios'

export default {
  data() {
    return {
      questions: null
    };
  },
  async created() {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple');
      console.log(response);

      this.questions = response.data.results.map((question) => {
        return {
          question: question.question,
          correctAnswer: question.correct_answer,
          incorrectAnswers: question.incorrect_answers
        };
      });
      console.log(this.questions);
    } 
    catch (error) {
      console.error(error);
    }
  }
};
</script>

<template>
  <ol>
    <li v-for="question in questions" :key="question">{{ question.question }}</li>
  </ol>
</template>
