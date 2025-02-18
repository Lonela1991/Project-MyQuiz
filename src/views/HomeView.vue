<template>
 <section id="section-logo">
    <h1>QuizMeUp</h1>
    <img alt="Picture of an white questionmark on a pink background" src="/assets/questionmark.jpeg" />
    <p>"Quiz: Cartoon and animation"</p>
  </section>
  <section id="section-start-button">
    <RouterLink to="/quiz"><button>Starta Quiz</button></RouterLink>
</section>
</template>

<style scoped>
#section-logo {
height: 50vh;
color: #fff;
}

#section-start-button{
  height: 20vh;

}
</style>
