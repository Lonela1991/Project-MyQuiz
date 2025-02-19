<script setup>
import { defineProps} from 'vue'

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
display: flex;
flex-wrap: column;
height: 8rem;
padding: 3rem 1rem;
margin-bottom: 1.5rem;

border-radius: 10px;
background-color: #fff;
line-height: 2rem;
font-size: 0.8rem;

}

</style>
