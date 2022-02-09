<template>
  <div class="home">
    <img class="logo" width="100" src="logo.png" alt="">
    <h1>
     Welcome : {{ count.name }}
    </h1>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
      ...mapState({
      count: state => state.user
    }),
  },
 mounted() {
    console.log();
  },
};
</script>
