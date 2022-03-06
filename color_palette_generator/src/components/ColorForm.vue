<template>
  <div class="color-form">
    <div class="color-form__field">
      <label class="color-form__label">彩度</label>
      <input type="number" class="color-form__input" min="0" max="100" v-model="saturation"/>
    </div>
    <div class="color-form__field">
      <label class="color-form__label">明度</label>
      <input type="number" class="color-form__input" min="0" max="100" v-model="lightness"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      initSaturation: String,
      initLightness: String,
    },
    data() {
      return {
        saturation: this.initSaturation,
        lightness: this.initLightness,
      }
    },
    updated() {
      this.$emit("emitUp", { saturation: this.saturation, lightness: this.lightness });
    }
  }
</script>
