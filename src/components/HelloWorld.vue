<script>
  export default {
    props: {
      msg: String
    }
  };
</script>

<template>
  <img alt="" src="/assets/questionmark.jpeg" />
  <p>{{ msg }}</p>
</template>

<style>
  p {
    font-weight: bold;
  }
</style>