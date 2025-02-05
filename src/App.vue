<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  }
};
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

  <HelloWorld msg="Hello World!" />
  
  <main>
    <RouterView />
  </main>
  

</template>
