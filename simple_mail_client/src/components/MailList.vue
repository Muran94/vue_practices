<template>
  <div class="mails__container">
    <MailItem v-for="mail in mails" :key="mail.id" :id="mail.id" :sentAt="mail.sentAt" :title="mail.title" :body="mail.body"/>
  </div>
</template>

<script>
import MailItem from '@/components/MailItem';
import { mapState } from 'vuex';

export default {
  components: {
    MailItem
  },
  computed: {
    ...mapState(['mails']),
  }
}
</script>

<style lang="scss" scoped>
  .mails__container {
    // Flexbox
    display: flex;
    flex-direction: column;
  }
</style>