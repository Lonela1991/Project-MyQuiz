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
gap: 0.5rem;
border-radius: 10px;
background-color: #af508a;
padding: 1rem;
}

.answer-section {
margin: 0.5rem;
padding: 1rem;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
font-weight: bold;
}

</style>
