<template>
  <div class="planets">
    <v-list v-if="result">
      <v-list-item
        v-for="(planet, index) in result"
        :key="index"
        @click="choosePlanet(index)"
        >{{ planet.name }}</v-list-item>
    </v-list>
    <div class="planets__info">
      <div v-if="!showInfo">Select item from the list</div>
      <v-card v-if="showInfo" class="planet__card card" style="width: 220px;">
      <img :src="getPlanetImg" class="card__img"/>
        <div><strong>Name:</strong> {{chosenPlanet.name}}</div>
        <div><strong>Gravity:</strong> {{chosenPlanet.gravity}}</div>
        <div><strong>Population:</strong> {{chosenPlanet.population}}</div>
        <div><strong>Climate:</strong> {{chosenPlanet.climate}}</div>
        <div><strong>Terrain:</strong> {{chosenPlanet.terrain}}</div>
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
      chosenPlanet: {},
      currentIndex: null,
    };
  },
  computed: {
    getPlanetImg() {
      return `https://starwars-visualguide.com/assets/img/planets/${this.currentIndex + 2}.jpg`;
    },
  },
  mounted() {
    axios
      .get('https://swapi.co/api/planets/')
      .then((res) => {
        this.result = res.data.results;
      })
      .catch((err) => {
        this.$emit('error', err);
      });
  },
  methods: {
    choosePlanet(index) {
      this.showInfo = true;
      this.chosenPlanet = this.result[index];
      this.currentIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.planets {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 40px;
  &__info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
    width: 220px;
  }
  &__card {
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}
.card {
  &__img {
    width: 200px;
    height: 200px;
  }
}
</style>
