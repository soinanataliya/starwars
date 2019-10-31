<template>
  <div class="people">
    <v-list v-if="result">
      <v-list-item
        v-for="(person, index) in result"
        :key="index"
        @click="choosePerson(person)"
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
// import { getId } from '../utils/getId';

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
    choosePerson(person) {
      this.showInfo = true;
      // this.chosenPerson = this.result[index];
      const id = this.getId(person);
      axios
        .get(`https://swapi.co/api/people/${id}`)
        .then((res) => {
          this.chosenPerson = res.data;
        })
        .catch((err) => {
          this.$emit('error', err);
        });
    },
    getId(obj) {
      const { url } = obj;
      const urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
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
