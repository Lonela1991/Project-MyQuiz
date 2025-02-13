<script>


</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
    </ul>
    <ul>
      <li>
        <RouterLink to="/quiz">Quiz</RouterLink>
      </li>
    </ul>
    <ul>
      <li>
        <RouterLink to="/result">Result</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>

</template>


<style>
ul {
  list-style-type: none;
  display: inline-flex;
  }
</style>
