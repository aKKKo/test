<template>
  <div>
    <h1 class="bomj">
      VALERA
      в кармане {{ money }} рублей
    </h1>
    <button @click="drink">Выпить за любовь</button>
  </div>
</template>

<script>
export default {
  name: "Valera",
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  methods: {
    drink() {
      this.findBottleToDrink();
    },
    findBottleToDrink() {
      const bottleCost = Math.round(Math.random() * 1000);

      if (this.money < bottleCost) {
        this.$emit("scream", {
          isDrink: false,
          message: `БЛЕАТЬ! Ну за ${bottleCost} не сегодня`
        });
      } else {
        this.$emit("scream", {
          isDrink: true,
          message: `I FOUND IT, всего за ${bottleCost}`,
          cost: bottleCost
        });
      }
    }
  }
};
</script>

<style>
.bomj {
  display: block;
  background-color: blue;
  color: white;
}
</style>