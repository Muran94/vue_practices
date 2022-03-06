<template>
  <div class="color" @click="openPage">
    <div class="color__view" :style="`background: hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%);`"></div>
    <div class="color__info">
      <div class="color__name">{{ name }}</div>
      <div class="color__hsl">色相: {{ hue }}, 彩度: {{ saturation }}%, 明度: {{ lightness }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    hue: String,
    saturation: String,
    lightness: String,
  },
  methods: {
    openPage() {
      this.$router.push("/colors/2")
    }
  }
}
</script>