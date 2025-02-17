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
  border-radius: 6px;
  width: 91%;
  min-height: 100px;
  line-height: 30px;
  text-align: center;
  color: black;
  padding: 10px;
}

.question-text {
  display: inline-block;
  vertical-align: middle;
}
</style>