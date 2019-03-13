<template>
  <nav>
    <ul>
    <li><router-link v-bind:to="'/'">Jack</router-link></li>
    <li><router-link v-bind:to="'/lyndon'">Lyndon</router-link></li>
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
