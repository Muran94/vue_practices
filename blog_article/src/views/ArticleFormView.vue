<template>
  <div class="form">
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );

export default {
  data() {
    return {
      editorData: '<p>Content of the editor.</p>',
    }
  }
}
</script>