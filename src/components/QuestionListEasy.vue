<script setup>
import axios from 'axios'
import { ref } from 'vue'

const questions = ref([])

axios.get('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple')
  .then(function(response){
    console.log(response.data.results)

   questions.value = response.data.results.map((result) => ({
          question: result.question,
          x: result.correct_answer,
          answerOptions: [
            result.correct_answer,
            result.incorrect_answers[0],
            result.incorrect_answers[1],
            result.incorrect_answers[2],
        ]
      }));
      return questions
  })


function myAnswer(answer, question){
    if(answer === question.x){
    console.log("Rätt svar!")

    }
    else{
        console.log("FEEEEEEL!")
    }
}

</script>

<template>
    <template v-for="question in questions">
     <section id="questionSection">
        <h2 id="questionText" >{{question.question}}</h2>
     </section>
     <section id="answerSection">
        <div id="answerBox" @click="myAnswer(answer, question)" v-for=" answer in question.answerOptions" :key="answer">
        <p id="answerOption" >
            {{answer}}</p>
        </div>
     </section>
    </template>
</template>

<style>
body {
  width: 100%;
  background-color: #333;
  color: #fff;
  margin: 0px;
}

main {
  width: 360px;
}

h1 {
  font-family: sans-serif;
}

h2 {
  font-family: sans-serif;
  font-size: 16px;
  color: black;
}

p {
  font-family: sans-serif;
}

#questionSection {
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 100px;
  width: 100%;
  line-height: 100px;
  text-align: center;
}

#questionText {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}

#answerSection {
  display: flex;
  background-color: rgba(255, 4, 159, 0.553);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  border-radius: 5%;
  height: 230px;
  width: 98%;
}

#answerBox {
  background-color: white;
  border: 1px black;
  height: 45%;
  width: 45%;
  border-radius: 5%;
  line-height: 100px;
  text-align: center;
}

#answerBox:active {
  background-color: rgb(169, 169, 169);
}

#answerOption {
  color: black;
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}
</style>
