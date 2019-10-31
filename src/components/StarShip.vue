<template>
  <div>
      <v-card class="card">
        <div>Name: {{ ship.name }}</div>
        <div>Model: {{ ship.model }}</div>
        <div>Crew: {{ ship.crew }}</div>
        <div>Passengers: {{ ship.passengers }}</div>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StarShip',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/starships${this.id}`)
      .then((res) => {
        this.result = res.data.results;
      })
      .catch((err) => {
        this.$emit('error', err);
      });
  },
};
</script>
<style>
.card{
  margin: 20px;
  padding: 10px;
  width: 500px;
}
</style>
