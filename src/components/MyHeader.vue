<template>
  <nav>
    <ul>
    <li><router-link v-bind:to="'/'">Home</router-link></li>
    <li><router-link v-bind:to="'/jack'">Jack</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>

<style scoped>

.router-link-active {
  font-weight: bold;
}

</style>
