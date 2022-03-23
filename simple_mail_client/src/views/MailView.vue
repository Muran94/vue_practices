<template>
  <div class="mail">
    <div class="mail__container">
      <div class="mail__header">
        <div>
          <h1 class="mail__title">{{ mail.title }}</h1>
          <div class="mail__sent-at">{{ mail.sentAt }}</div>
        </div>

        <span :class="favoriteClasses" @click="toggleFavorite">
        </span>
      </div>
      <div class="mail__body">{{ mail.body }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    toggleFavorite() {
      this.$store.commit("toggleFavorite", this.mail.id);
    }
  },
  computed: {
    addedToFavorite() {
      return this.mail.isFavorite === true;
    },
    favoriteClasses() {
      return ["mail__favorite", this.addedToFavorite && "mail__favorite--added"]
    },
    mail() {
      return this.mails.filter(mail => {
        return this.$route.params.id == mail.id;
      })[0];
    },
    ...mapState(['mails'])
  }
}
</script>

<style lang="scss" scoped>
.mail {
  // Color
  background: #ffffff;

  // Sizing
  width: 800px;

  // Spacing
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
}

.mail__container {
  // Flexbox
  align-items: start;
  display: flex;
  flex-direction: column;
}

.mail__header {
  // Flexbox
  align-items: center;
  display: flex;
  justify-content: space-between;

  // Sizing
  width: 100%;
}

.mail__title {
  // Font & Text
  font-size: 24px;

  // Spacing
  margin-bottom: 10px;
}

.mail__sent-at {
  // Color
  color: #999999;

  // Font & Text
  font-size: 15px;

  // Spacing
  margin-bottom: 30px;
}

.mail__favorite:before {
  content: 'ADD';

  // Border
  border: 1px solid #777;
  border-radius: 3px;

  // Color
  background: #fff;
  color: #777;

  // Flexbox
  align-items: center;
  display: inline-flex;
  justify-content: center;

  // Spacing
  padding: 5px 10px;

  // Interactive
  cursor: pointer;
}

.mail__favorite--added:before {
  content: 'REMOVE';

  // Border
  border-color: red;
  
  // Color
  color: #fff;
  background: red;
}

.mail__body {
  // Font & Text
  font-size: 18px;
}
</style>