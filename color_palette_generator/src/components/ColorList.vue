<template>
  <div class="colors">
    <ColorForm :initSaturation="colorData.saturation" :initLightness="colorData.lightness" @emitUp="updateColorData"/>


    <ColorItem name="Blue"   hue="216" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Indigo" hue="252" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Purple" hue="288" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Pink"   hue="324" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Red"    hue="0"   :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Orange" hue="36"  :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Yellow" hue="72"  :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Green"  hue="108" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Teal"   hue="144" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Cyan"   hue="180" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
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
        colorData: {
          saturation: "70",
          lightness: "70",
        }
      }
    },
    methods: {
      updateColorData(payload) {
        this.colorData = payload;
      }
    }
  }
</script>
