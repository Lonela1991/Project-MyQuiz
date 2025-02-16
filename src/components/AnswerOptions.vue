<script setup>
const props = defineProps({
    answers: {
        type: Array,
        required: true
    },
    selectedAnswer: {
        type: String,
        default: null
    },
    correctAnswer: {
        type: String,
        required: true
    }
})

const emit = defineEmits(["answerSelected"])

function onAnswerSelected(answer) {
 emit("updateSelectedAnswer", answer)

  if (answer === props.correctAnswer) {
    console.log(`Du svarade rätt! Det rätta svaret på frågan är ${props.correctAnswer}`)
    emit("updateCorrectAnswers")
  }
  else {
    console.log(`Du svarade ${answer} och det rätta svaret på frågan är ${props.correctAnswer}`)

  }
 
  setTimeout(() => { 
    emit("nextQuestion")
    emit("updateSelectedAnswer", null)
   }, 1000)

}

function getAnswerColor(answer) {
    if (!props.selectedAnswer) return "white"
    if (answer === props.correctAnswer) return "green"
    if (answer === props.selectedAnswer) return "red"
    return "white"
}

</script>
<template>
    <section class="answer-section">
        <div class="answer-box" @click="onAnswerSelected(answer)" v-for="(answer, index) in answers" :key="index"
            :style="{ backgroundColor: getAnswerColor(answer) }">
            <p class="answer-option">{{ answer }}</p>
        </div>
    </section>
</template>

<style>
.answer-section {
    display: flex;
    background-color: #a4196f;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    border-radius: 1%;
    height: 600px;
    margin-inline: auto;
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