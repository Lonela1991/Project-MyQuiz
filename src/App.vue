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
        <RouterLink to="/result">Results</RouterLink>
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
  font-size: 14px;
}

p {
  font-family: sans-serif;
  font-weight: bold;
}
</style>
