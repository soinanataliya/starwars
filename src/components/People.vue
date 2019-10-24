<template>
  <div class="people">
    <v-list v-if="result">
      <v-list-item
        v-for="(person, index) in result"
        :key="index"
        @click="choosePerson(index)"
        class="people__list"
        >{{ person.name }}</v-list-item>
    </v-list>
    <div class="people__info">
      <div v-if="!showInfo">Select item from the list</div>
      <v-card v-if="showInfo" class="people__card">
        <div>Name: {{chosenPerson.name}}</div>
        <div>Birth year: {{chosenPerson.birth_year}}</div>
         <div>Height: {{chosenPerson.height}}</div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      result: [],
      showInfo: false,
      chosenPerson: {},
    };
  },
  mounted() {
    axios
      .get('https://swapi.co/api/people/')
      .then((res) => {
        this.result = res.data.results;
      })
      .catch((err) => {
        this.$emit('error', err);
      });
  },
  methods: {
    choosePerson(index) {
      this.showInfo = true;
      this.chosenPerson = this.result[index];
    },
  },
};
</script>
<style lang="scss" scoped>
.people {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 40px;
  &__list {
    cursor: pointer;
  }
  &__info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  width: 220px;
  }
  &__card {
    padding: 20px;
  }
}
</style>
