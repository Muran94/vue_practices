<template>
  <div class="page">
    <div class="page__header">
      <h1>数値記憶</h1>
    </div>

    <div class="page__body">
      <div v-if="playStatus == 'count_down'">
        Starts in {{ countDownSecond }}
      </div>

      <div v-if="playStatus == 'remembering'" class="text-align-center">
        <div>{{ remainingSeconds }} seconds remaining.</div>
        <div class="font-size-big font-weight-bold">{{ generatedNumbers }}</div>
      </div>

      <div v-if="playStatus == 'answering'" class="text-align-center">
        <input type="text" v-model="answeredNumber"/>
        <button @click="answer">ANSWER</button>
      </div>

      <div v-if="playStatus == 'showing_results'" class="text-align-center">
        Here are the results.
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        countDownSecond: 3,
        remainingSeconds: 0,
      }
    },
    methods: {
      countDown() {
        setTimeout(() => {
          this.countDownSecond--;

          if (this.countDownSecond <= 0) {
            this.$store.commit("startRemembering");
            this.remember();
            return
          } else {
            this.countDown();
          }
        }, 1000);
      },
      remember() {
        setTimeout(() => {
          this.remainingSeconds--;

          if (this.remainingSeconds <= 0) {
            this.$store.commit("startAnswering");
            return
          } else {
            this.remember();
          }
        }, 1000);
      },
      answer() {
        this.$store.commit("startShowingResults")
      }
    },
    mounted() {
      this.remainingSeconds = this.seconds;
      this.$store.commit("generateNumbers");
      this.$store.commit("startCountDown");
      this.countDown();
    },
    computed: {
      ...mapState(['seconds', 'playStatus', 'generatedNumbers', 'answeredNumber'])
    }
  }
</script>
