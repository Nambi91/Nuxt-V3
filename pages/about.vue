<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam
      veritatis odit commodi odio ea atque obcaecati perferendis quam ad neque
      alias quas est, optio aut cupiditate sint assumenda error!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
