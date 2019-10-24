<template>
  <div id="app">
    <div class="header">
      <div class="header__item">
        <router-link to="/"><v-btn outlined>Star DB</v-btn></router-link>
      </div>
      <div class="header__item">
        <router-link to="/people"><v-btn outlined >People</v-btn></router-link>
      </div>
      <div class="header__item">
      <router-link to="/planets"><v-btn outlined>Planets</v-btn></router-link>
      </div>
      <div class="header__item">
      <router-link to="/ships"><v-btn outlined>Star Ships</v-btn></router-link>
      </div>
    </div>
    <router-view
      @error="showError"
    ></router-view>
    <Error
      v-show='isErrorShown'
      @close='isErrorShown = false'
    />
  </div>
</template>

<script>
import Error from './components/Error.vue';

export default {
  name: 'app',
  data() {
    return {
      isErrorShown: false,
    };
  },
  components: {
    Error,
  },
  methods: {
    showError() {
      this.isErrorShown = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  &__item {
    margin: 5px;
  }
}
.header__item {
  margin: 5px;
}
</style>
