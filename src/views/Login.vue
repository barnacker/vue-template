<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex text-xs-center xs12 sm4 lg2>
        <v-icon>face</v-icon>
        <span class="headline">&nbsp;Login</span>
        <v-form>
          <v-text-field label="User Name" placeholder="ex. joe"></v-text-field>
          <v-text-field label="Password" type="password"></v-text-field>
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click="login()"
          >Login</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      loading: false,
      //
    };
  },
  methods: {
    ...mapActions(['setLogged']),
    login() {
      this.loading = true;
      this.setLogged();
      this.$router.push('/boards');
    },
  },
};
</script>
