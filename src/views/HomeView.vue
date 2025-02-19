<template>
  <article id="article-home" >
 <section id="section-logo">
    <h1>QuizMeUp</h1>
    <img alt="Picture of an white questionmark on a pink background" src="/assets/questionmark.jpeg" />
    <p>"Quiz: Cartoon and animation"</p>
  </section>
  <section id="section-start-button">
    <RouterLink to="/quiz/1"><button>Starta Quiz</button></RouterLink>
</section>
</article>
</template>

<style scoped>

#article-home {
  display: flex;
    flex-direction: column;
    max-width: 360px;
    padding: 6rem 5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
   background-color: #a4196f;
}

#section-logo {
  margin: 1rem 0;
}

#section-start-button {
  margin: 4rem 0;
}
</style>
