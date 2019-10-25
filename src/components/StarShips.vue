<template>
  <div class="ships">
     <v-list v-if="result">
      <v-list-item
        v-for="(ship, index) in result"
        :key="index"
        class="ships__ship"
        >
        <router-link :to="{ path: `/ships/${getId(ship)}`, name: 'StarShip',
        params: { ship: ship, id: getId(ship)}}" style='text-decoration: none; color: #2c3e50;'>
          {{ ship.name }}
        </router-link>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'StarShips',
  data() {
    return {
      result: [],
      showInfo: false,
      chosenPerson: {},
    };
  },
  mounted() {
    axios
      .get('https://swapi.co/api/starships')
      .then((res) => {
        this.result = res.data.results;
      })
      .catch((err) => {
        this.$emit('error', err);
      });
  },
  methods: {
    getId(ship) {
      const { url } = ship;
      const urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
    },
  },
};
</script>

<style lang="scss" scoped>
.ships {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 40px;
  width: 1200px;
  &__ship {
    cursor: pointer;
    background-color: white;
    transition: 0.2s linear;
    &:hover {
      background-color: #00000014;
    }
  }
}
</style>
