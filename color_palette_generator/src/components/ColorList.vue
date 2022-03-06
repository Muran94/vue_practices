<template>
  <div class="colors">
    <ColorForm :initSaturation="colorData.saturation" :initLightness="colorData.lightness" @emitUp="updateColorData"/>


    <ColorItem name="Blue"   hue="216" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Purple" hue="261" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Pink"   hue="330" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Red"    hue="354"   :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Orange" hue="27"  :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Yellow" hue="45"  :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Green"  hue="152" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
    <ColorItem name="Cyan"   hue="190" :saturation="colorData.saturation" :lightness="colorData.lightness"/>
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
          saturation: "80",
          lightness: "60",
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
