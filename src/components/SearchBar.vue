<template>
  <div class="search-bar">
    <form v-on:submit.prevent="listRepositoriesByUsername"></form>
    <input type="text" placeholder="Write a username" v-model="username" />
    <input
      type="button"
      value="Search"
      v-on:click="listRepositoriesByUsername"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SearchBar",
  computed: {
    ...mapState({
      usernameFromHistory: "username",
    }),
    username: {
      get() {
        return this.usernameFromHistory;
      },
      set(value) {
        this.updateUsername(value);
      },
    },
  },
  methods: {
    ...mapActions({
      updateUsername: "updateUsername",
      listRepositoriesByUsername: "listRepositoriesByUsername",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar {
  height: 44px;
  width: 880px;

  display: flex;
}

.search-bar input {
  flex: 1;
  height: 44px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.search-bar input[type="button"] {
  flex: 0;
}
</style>
