<template>
  <div class="color" @click="openPage">
    <div class="color__view" :style="styleObject"></div>
    <div class="color__info">
      <div class="color__name">{{ name }}</div>
      <div class="color__hsl">H{{ ('00' + hue).slice(-3) }}  S{{ ('00' + saturation).slice(-3) }}  L{{ ('00' + lightness).slice(-3) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Blue",
      hue: 220,
      saturation: 80,
      lightness: 65,
      styleObject: {
        // backgroundColor: 'red',
        backgroundColor: "hsl(220, 80%, 65%)",
      },
    }
  },
  methods: {
    openPage() {
      this.$router.push("/colors/2")
    }
  }
}
</script>