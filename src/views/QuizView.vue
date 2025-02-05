<script>
import QuestionListEasy from "../components/QuestionListEasy.vue";
import QuestionListMedium from "../components/QuestionListMedium.vue";
import QuestionListHard from "../components/QuestionListHard.vue";

export default {
  components: {
    QuestionListEasy,
    QuestionListMedium,
    QuestionListHard,
  }
};
</script>

<template>
  <h1>Quiz</h1>
  <QuestionListEasy />
  <QuestionListMedium />
  <QuestionListHard />
</template>
