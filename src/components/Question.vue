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
    <h2> {{ question }}</h2>
</section>

</template>

<style>
.question-section {
background-color: #fff;
border-radius: 10px;
padding: 1.5rem;
font-size: 1.0rem;
margin-bottom: 2rem;
height: 20vh;
}

</style>
