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
<h1>Resultat</h1>
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
</article>
</template>
<style scoped>

#article-resultlist {
    height: 100vh;
}

table {
    background-color: white;
    padding: 1.5rem;
    border-radius: 10px;

}

h1 {color: white;}

</style>
