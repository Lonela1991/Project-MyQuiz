<script setup>
const props = defineProps({
question: {
    type: String,
    required: true
}
})

</script>

<template>

<section class="question-section">
    <h2 class="questionText"> {{ question }}</h2>
</section>

</template>

<style>
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
</style>