<script setup>

const emit = defineEmits(["updateSelectedAnswer", "nextQuestion","updateSelectedAnswer" ])

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

<style scoped>
.answer-section {
    display: flex;
    background-color: #ffffff30;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    border-radius: 6px;
    height: 500px;
    margin-inline: auto;
    width: 96%;
}

.answer-box {
    background-color: white;
    border: 1px black;
    height: 20%;
    width: 90%;
    border-radius: 15px;
    line-height: 75px;
    text-align: center;
  
}

.answer-option {
    color: black;
    display: inline-block;
}
</style>