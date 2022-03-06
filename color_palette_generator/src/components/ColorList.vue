<template>
  <div class="colors">
    <ColorForm :initSaturation="colorSetting.saturation" :initLightness="colorSetting.lightness" @emitUp="updateColorSetting"/>

    <ColorItem v-for="(colorData, colorKey) in colors" :key="colorKey" :name="colorData.name" :hue="colorData.hue" :saturation="colorSetting.saturation" :lightness="colorSetting.lightness"/>
  </div>
</template>

<script>
  import ColorForm from '@/components/ColorForm.vue';
  import ColorItem from '@/components/ColorItem.vue';

  export default {
    components: {
      ColorForm,
      ColorItem,
    },
    data() {
      return {
        colorSetting: {
          saturation: "80",
          lightness: "60",
        },
        colors: {
          blue:   { name: "Blue",   hue: "216" },
          purple: { name: "Purple", hue: "261" },
          pink:   { name: "Pink",   hue: "330" },
          red:    { name: "Red",    hue: "354" },
          orange: { name: "Orange", hue:  "27" },
          yellow: { name: "Yellow", hue:  "45" },
          greeen: { name: "Green",  hue: "152" },
          Cyan:   { name: "Cyan",   hue: "190" },
        }
      }
    },
    methods: {
      updateColorSetting(payload) {
        this.colorSetting = payload;
      }
    }
  }
</script>
