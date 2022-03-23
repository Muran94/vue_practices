<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

body {
  margin: 0;
}

#app {
  // Animations & Transitions
  // Backgrounds & Borders
  background: #fafafa;

  // Box Model
  width: 600px;

  // Display
  // Flexbox
  // Fonts & Text
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  // Grid
  // Images & Masking
  // Lists
  // Position & Transformation
  margin: 60px auto 0 auto;

  // User Interface
}

.page {
  // Animations & Transitions
  // Backgrounds & Borders
  background: #fff;
  border-radius: 5px;

  // Box Model
  padding: 30px;

  // Display
  // Flexbox
  // Fonts & Text
  // Grid
  // Images & Masking
  // Lists
  // Position & Transformation
  // User Interface

  .page__header {
    padding-bottom: 15px;
    border-bottom: 1px solid #42b983;
  }

  .page__body {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}

.numeric-memorization {
  &__link {
    // Border
    border: 1px solid #eee;
    border-radius: 5px;

    // Color
    color: #42b983;

    // Flexbox
    display: flex;
    justify-content: center;
    

    // Font & Text
    font-size: 24px;
    text-decoration: none;

    // Spacing
    padding: 15px;
  }
}
</style>
