<template>
  <v-app id="inspire">
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items v-if="!logged">
        <v-btn flat :to="{ name:'login' }">Login</v-btn>
        <v-btn flat :to="{ name:'signup' }">Signup</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">SAM &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      'logged',
    ]),
  },
};
</script>
