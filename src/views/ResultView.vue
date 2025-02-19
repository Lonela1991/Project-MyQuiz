<script setup>
import {onMounted, ref} from 'vue'

const players = ref([])

onMounted(() => {
const data = localStorage.getItem("Resultat")
if(data){
try {
    players.value = JSON.parse(data)
}
catch(error){
console.error("Fel vid hämtning av data från localStorage", error)
players.value=[]
}
}
})

</script>

<template>
<article id="article-resultlist">
<section id="section-resultlist-header">
    <h1>Resultat</h1>
</section>
<section id="section-resultlists">
<table>
    <thead>
        <tr>
            <th>Datum</th>
            <th>Spelare</th>
            <th>Resultat</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(player, index) in players" :key="index" >
            <td>{{ player.datum || 'N/A'}} </td>
            <td>{{ player.spelare || 'N/A'}}</td>
            <td>{{ player.resultat || 'N/A'}}</td>
        </tr>
    </tbody>
</table>
</section>
<section id="section-start-button">
    <RouterLink to="/quiz/1"><button>Spela igen</button></RouterLink>
</section>
</article>
</template>
<style scoped>

#article-resultlist {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    max-height: 670px;
    padding: 2.5rem 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    background-color: #a4196f;
}

#section-resultlist-header{
    margin-bottom: 1rem;
    color: white;
}

#section-resultlists {
margin-bottom: 2rem;
min-height: 30rem;
overflow: scroll;
}

#section-start-button {
padding: 1rem 0;
}

table {
    background-color: white;

    padding: 0.5rem 2rem ;
}
</style>
