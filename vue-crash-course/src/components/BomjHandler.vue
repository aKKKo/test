<template>
  <div>
    <Bomj :money="money" @scream="onBomjScream" />
    <section>
      <button @click="giveSomeMoney">дать денег</button>
      <br />
      Выпил успешно {{drinkCountSuccess}} раз
      Провалился {{drinkCountFail}} раз
    </section>

    <div>
      <div v-for="(row, index) in bomjLog" :key="index">говорит {{row.message}}</div>
    </div>
  </div>
</template>

<script>
import Bomj from "@/components/Bomj.vue";

export default {
  components: {
    Bomj
  },
  data() {
    return {
      money: 1000,
      drinkCountSuccess: 0,
      drinkCountFail: 0,
      bomjLog: []
    };
  },
  methods: {
    giveSomeMoney() {
      console.log("giveSomeMoney");
      this.money += 100;
    },
    onBomjScream(screamData) {
      this.bomjLog.push(screamData);

      if (screamData.isDrink) {
        this.drinkCountSuccess++;
        // this.money = this.money - screamData.cost;
        this.money -= screamData.cost;
      } else {
        this.drinkCountFail++;
      }
    }
  }
};
</script>