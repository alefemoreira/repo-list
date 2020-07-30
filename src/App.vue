<template>
  <div id="app">
    <h1 align="center">Repositories List</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <SearchBar />
    <ul>
      <li v-for="(repository, index) in repositories" :key="index">
        <Repository
          v-bind:name="repository.name"
          v-bind:description="repository.description"
          v-bind:updated="repository.updated_at"
          v-bind:language="repository.language"
          v-bind:size="repository.size"
          v-bind:owner="repository.owner.login"
          v-bind:fork="repository.fork"
          v-bind:repo-url="repository.html_url"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import Repository from "./components/Repository.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    SearchBar,
    Repository,
  },
  computed: {
    ...mapState({
      repositories: ({ repositories }) => repositories,
    }),
  },
};
</script>

<style>
#app {
  width: 900px;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}

#app ul {
  margin: 0;
  padding: 0;
}

#app ul li {
  margin: 0;

  list-style-type: none;
}
</style>
