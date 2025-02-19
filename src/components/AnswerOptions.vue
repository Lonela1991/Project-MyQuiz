<script setup>
import {defineEmits, defineProps} from 'vue'

const emit = defineEmits(["updateSelectedAnswer", "updateCorrectAnswers", "nextQuestion"])

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
        console.log(`Användaren svarade rätt! ${props.correctAnswer} är det rätta svaret!`)
        emit("updateCorrectAnswers")
    }
    else {
        console.log(`Användaren svarade ${answer}, vilket är fel! Rätt svar är: ${props.correctAnswer}`)

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
    <article class="answer-article">
    <section class="answer-section" @click="onAnswerSelected(answer)" v-for="(answer, index) in answers" :key="index"
            :style="{ backgroundColor: getAnswerColor(answer) }">
            <p>{{ answer }}</p>
    </section>
</article>
</template>

<style scoped>
.answer-article{
display:flex;
flex-direction: column;
align-items: center;
padding: 2rem 0.5rem;
gap: 1rem;
border-radius: 10px;
background-color: #af508a;
}

.answer-section {
height: 2.5rem;
width: 90%;
padding: 1rem 0;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
font-weight: bold;
}

</style>
