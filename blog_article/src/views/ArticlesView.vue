<template>
  <div class="articles">
    <ArticlesItem/>
    <ArticlesItem/>
    <ArticlesItem/>
    <ArticlesItem/>
    <ArticlesItem/>
    <ArticlesItem/>

    <router-link to="/articles/new" class="fixed-button">+</router-link>
  </div>
</template>

<script>
import ArticlesItem from '@/components/ArticlesItem.vue'

export default {
  components: {
    ArticlesItem
  }
}
</script>

<style lang="scss">
.articles {
  // Flexbox
  display: flex;
  flex-direction: column;
}

.articles__item {
  // Color
  background: #FFFFFF;
  color: inherit;

  // Font & Text
  text-decoration: none;

  // Grid
  display: grid;
  gap: 15px;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 30px 1fr;

  // Interactivity
  cursor: pointer;

  // Spacing
  padding: 15px 0;
}

.articles__item:hover {
  // Animation
  transition: all 0.2s;

  // Color
  opacity: 0.8;
}

.articles__item + .articles__item {
  // Spacing
  margin-top: 15px;
}

.articles__item-image {
  // Border
  border-radius: 10px;

  // Grid
  grid-column: 1/2;
  grid-row: 1/3;

  // Object
  object-fit: cover;

  // Sizing
  height: 100px;
  width: 100px;
}

.articles__item-title {
  // Font & Text
  font-size: 18px;
  font-weight: bold;

  // Grid
  grid-column: 2/3;
  grid-row: 1/2
}

.articles__item-published-at {
  // Font & Text
  font-size: 12px;

  // Grid
  grid-column: 2/3;
  grid-row: 2/3;
}

.fixed-button {
  // Border
  border-radius: 50%;

  // Color
  background: tomato;
  color: #FFFFFF;

  // Flexbox
  align-items: center;
  display: flex;
  justify-content: center;

  // Font & Text
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  text-decoration: none;

  // Interactivity
  cursor: pointer;
  user-select: none;

  // Position
  position: fixed;
  right: 100px;
  bottom: 100px;

  // Shadow
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  // Sizing
  height: 75px;
  width: 75px;
}
</style>
