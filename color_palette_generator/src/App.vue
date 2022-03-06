<template>
  <div id="app">
    <div class="c-page">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    // Color
    background: #efefef;

    // Spacing
    margin: 0;
  }

  .c-page {
    // Color
    background: #fff;

    // Sizing
    width: 500px;

    // Spacing
    margin: 30px auto;
  }

  .color {
    // Cursor
    cursor: pointer;

    // Flexbox
    align-items: center;
    display: flex;

    // Spacing
    padding: 30px;
  }

  .color:hover {
    // Animation
    transition: opacity 0.3s;

    // Color
    opacity: 0.7;
  }

  .color + .color {
    // Border
    border-top: 1px solid #efefef;
  }

  .color-form {
    // Border
    border-bottom: 1px solid #efefef;

    // Flexbox
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 10px;

    // Spacing
    padding: 30px;
  }

  .color-form__field {
    // Flexbox
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .color-form__label {
    // Color
    color: #aaa;

    // Font & Text
    font-size: 12px;

    // Spacing
    margin-bottom: 6px;
  }

  .color-form__input {
    // Border
    border-radius: 3px;

    // Box
    border: 1px solid #ccc;

    // Color
    color: #555;

    // Font & Text
    font-size: 16px;

    // Spacing
    padding: 12px;
  }

  .color__view {
    // Border
    border: 3px solid #fff;
    border-radius: 50%;

    // Shadow
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

    // Sizing
    height: 50px;
    width: 50px;

    // Spacing
    margin-right: 15px;
  }

  .color__info {
    // Flexbox
    display: flex;
    flex-direction: column;

    // Spacing
  }

  .color__name {
    // Color
    color: #555;

    // Font & Text
    font-size: 18px;
    font-weight: 500;

    // Spacing
    margin-bottom: 8px;
  }

  .color__hsl {
    // Color
    color: #aaa;

    // Font & Text
    font-size: 12px;
  }
</style>