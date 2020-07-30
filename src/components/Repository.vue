<template>
  <div class="repository">
    <div class="content">
      <div class="title-description">
        <a v-bind:href="repoUrl" target="_blank">
          <h2 class="title">{{ name }}</h2>
        </a>
        <p class="description">
          {{ description }}
        </p>
      </div>
      <div class="row">
        <div class="column">
          <p><strong>Updated: </strong>{{ updated_formated }}</p>
          <p><strong>Language: </strong>{{ language_formated }}</p>
        </div>

        <div class="column">
          <p><strong>Size: </strong>{{ size }} MB</p>
          <p><strong>Owner: </strong>{{ owner }}</p>
        </div>

        <div class="column-reverse">
          <p v-if="fork"><strong>Forked!</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repository",
  props: [
    "name",
    "description",
    "updated",
    "language",
    "size",
    "owner",
    "fork",
    "repoUrl",
  ],
  computed: {
    updated_formated: {
      get() {
        const date = new Date(this.updated);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate() + 1;

        return `${year}-${month}-${day}`;
      },
    },
    language_formated: {
      get() {
        return this.language || "None";
      },
    },
  },
};
</script>

<style scoped>
.repository {
  width: 872px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  margin-top: 24px;
  padding: 4px 4px;

  border-radius: 5px;
  /* border: 0.5px solid rgba(0, 0, 0, 0.3); */
}

.repository .content {
  margin-left: 16px;
  margin-bottom: 16px;
}

.repository .content .title-description {
  margin-bottom: 24px;
}

.repository .content .title-description a {
  /* text-decoration: none; */
  color: black;
}

.repository .content .title-description .title {
  margin-bottom: 0;
}

.repository .content .title-description .description {
  margin-top: 6px;
  font-size: 15px;
}

.repository .content .column {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0px;
}

.repository .content .column-reverse {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  margin: 0px;
}

.repository .content .column p,
.repository .content .column-reverse p {
  margin: 8px;
  margin-right: 72px;
  margin-left: 0px;
  flex: 2;
}

.repository .content .row {
  display: flex;
}
</style>
