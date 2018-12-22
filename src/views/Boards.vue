<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex xs4 sm4 lg2>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Board 1</span>
                </v-flex>
                <v-flex xs2>
                  <v-btn fab dark small color="red">
                    <v-icon dark>delete</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions>
            <v-btn flat color="orange">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4 sm4 lg2>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Board 2</span>
                </v-flex>
                <v-flex xs2>
                  <v-btn fab dark small color="red">
                    <v-icon dark>delete</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions>
            <v-btn flat color="orange">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4 sm4 lg2>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://images.unsplash.com/photo-1508610232556-b13ab6d792b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          >
            <v-container fill-height fluid>
              <v-layout justify-space-between fill-height>
                <v-flex xs12 align-end>
                  <span class="headline">Board 3</span>
                </v-flex>
                <v-flex xs2>
                  <v-btn fab dark small color="red">
                    <v-icon dark>delete</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions>
            <v-btn flat color="orange">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4 sm4 lg2>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Create board...</span>
                <v-form>
                  <v-text-field label="User Name" placeholder="ex. joe"></v-text-field>
                  <v-text-field
                    label="Image URL"
                    placeholder="http://joe.com/ho.jpg"
                  ></v-text-field>
                  <v-btn
                    :loading="creating"
                    :disabled="creating"
                    color="primary"
                    @click="login()"
                  >Create</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'boards',
  data() {
    return {
      creating: false,
      //
    };
  },
  methods: {
  //
  },
};
</script>
