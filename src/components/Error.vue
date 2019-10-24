<template>
  <v-card class="error">
    <v-btn small @click='close' class="error__btn">x</v-btn>
    <div>Error!</div>
  </v-card>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  position: fixed;
  top: 160px;
  left: 50%;
  transform: translate(-50%);
  width: 250px;
  height: 100px;
  &__btn {
    position: relative;
    left: 95px;
    top: 5px;
  }
}
</style>
