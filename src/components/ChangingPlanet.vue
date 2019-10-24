<template>
  <div v-if="currentIndex!== null" class='card'>
    <v-card>
    <img :src="getPlanetImg" />
    <div>Planet name: {{ currentPlanet.name }} </div>
    <div>Gravity: {{ currentPlanet.gravity }} </div>
    <div>Population: {{ currentPlanet.population }} </div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChangingPlanet',
  data() {
    return {
      result: [],
      currentIndex: null,
    };
  },
  mounted() {
    axios
      .get('https://swapi.co/api/planets/')
      .then((res) => {
        this.result = res.data.results;
        this.getRandomPlanet();
        setInterval(() => { this.getRandomPlanet(); }, 10000);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  computed: {
    currentPlanet() {
      console.log(this.currentIndex);
      console.log(this.getPlanetImg);
      return this.result[this.currentIndex];
    },
    getPlanetImg() {
      const src = `https://starwars-visualguide.com/assets/img/planets/${this.currentIndex + 2}.jpg`;
      const image = new Image();
      image.src = src;
      image.onerror = () => {
        this.$emit('error');
      };
      return src;
    },
  },
  methods: {
    getRandomPlanet() {
      this.currentIndex = Math.floor(Math.random() * Math.floor(this.result.length));
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  margin: 10px auto;
  width: 500px;
}
</style>
