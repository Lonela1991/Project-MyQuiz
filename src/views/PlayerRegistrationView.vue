<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'


const router = useRouter()
const route = useRoute()

const playerName = ref("")

const result = Number(route.query.result) || 0
const total = Number(route.query.total) || 0

function addPlayerData() {
    const newPlayer = {
        datum: getTodaysDate(),
        spelare: playerName.value,
        resultat: result
    }
    addPlayerToLocalStorage(newPlayer)
    playerName.value = ""
    console.log("Ny spelare är tillagd i resultatlistan: " + JSON.stringify(newPlayer))
    router.push({ name: "ResultView" })
}

function addPlayerToLocalStorage(newPlayer) {
    const players = getPlayersFromLocalStorage()
    players.push(newPlayer)
    localStorage.setItem("Resultat", JSON.stringify(players))
}


function getTodaysDate() {
    const today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    const yyyy = today.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }
    if (mm < 10) {
        mm = "0" + mm
    }
    return `${dd}/${mm}/${yyyy}`
}

function getPlayersFromLocalStorage() {
    let players = []
    if (localStorage.getItem("Resultat")) {
        players = JSON.parse(localStorage.getItem("Resultat"))
    }
    return players
}


</script>
<template>
    <article class="form">
        <section id="section-show-result">
            <h1> Du fick {{ result }} rätt av {{ total }}</h1>
        </section>
        <section id="section-register-result">
            <h2>Vill du spara ditt reslutat?</h2>
            <label for="playerName">Skriv in ditt namn:</label>
            <input type="text" id="playerName" v-model="playerName" placeholder="Namn">
        </section>
        <section id="section-button">
            <button id="btnAddPlayerData" @click="addPlayerData">Registrera</button>
        </section>

    </article>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    color: #fff;
    padding: 2rem 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    background-color: #a4196f;
}

#section-show-result {
    padding: 6rem 1rem;
}

#section-register-result {
    padding: 2rem 1rem;
}

#section-button {
    padding: 6rem 0;
}

label {
    display: block;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
}

input {
    text-align: center;
    height: 2rem;
}
</style>
