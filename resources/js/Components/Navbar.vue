<template>
  <nav class="navBar">
    <ul class="navBar__link">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'login' }">login</router-link></li>
      <span v-if="count"> | <a @click="logout">Logout</a></span>
      {{count}}
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
};
</script>
