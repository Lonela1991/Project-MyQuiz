<script>
  export default {
    created() {
      fetch("https://opentdb.com/api.php?amount=10&category=32&difficulty=hard&type=multiple")
        .then((response) => response.json())
        .then((questions) => {
          this.questions = questions.results;
          
        });
    },
    data() {
      return {
      questions: null
      };
    }
  };
</script>

<template>
  <ol>
    <li v-for="question in questions">{{question}}</li>
  </ol>
</template>