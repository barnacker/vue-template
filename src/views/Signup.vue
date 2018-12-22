<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex text-xs-center xs12 sm4 lg2>
        <v-icon>face</v-icon>
        <span class="headline">&nbsp;Signup</span>
        <v-form>
          <v-text-field label="User Name" placeholder="ex. joe"></v-text-field>
          <v-text-field label="Display Name" placeholder="ex. Joe Smith"></v-text-field>
          <v-text-field label="Email" placeholder="joe.smith@gmail.com"></v-text-field>
          <v-text-field label="Password" type="password"></v-text-field>
          <v-text-field label="Confirm Password" type="password"></v-text-field>
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click="signup()"
          >Signup</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'signup',
  data() {
    return {
      loading: false,
      //
    };
  },
  methods: {
    signup() {
      this.loading = true;
      this.$router.push('/login');
    },
  },
};
</script>
