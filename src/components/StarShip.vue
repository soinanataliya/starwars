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
export default {
  name: 'StarShip',
  props: {
    ship: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.$route);
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
