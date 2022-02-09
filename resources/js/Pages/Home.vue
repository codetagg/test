<template>
  <div class="home">
    <img class="logo" width="100" src="logo.png" alt="">
    <h1>
      {{ status }}
    </h1>
   
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState({
      status: state => state.authStatus
    }),
  }
}
</script>
