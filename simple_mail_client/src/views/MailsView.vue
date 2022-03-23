<template>
  <div class="mails">
    <MailList/>
  </div>
</template>

<script>
import MailList from '@/components/MailList.vue'

export default {
  components: {
    MailList
  }
}
</script>

<style lang="scss" scoped>
.mails {
  // Color
  background: #fff;

  // Sizing
  width: 800px;

  // Spacing
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
