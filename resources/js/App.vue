<template>
	<div>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</div>
</template>

<script>


export default {
  name: 'app',
  components: {
    Navbar: () => import('./Components/Navbar.vue')
  }
};
</script>
