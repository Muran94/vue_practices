<template>
  <router-link :to="`/mails/${id}`" class="mails__item">
    <div class="mails__item-avatar">m</div>
    <div class="mails__item-column">
      <div class="mails__item-title">{{ title }}</div>
      <div class="mails__item-body">{{ body }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: String,
    sentAt: String,
    title: String,
    body: String,
  },
}
</script>

<style lang="scss" scoped>
  .mails__item {
    // Color
    color: #555555;

    // Flexbox
    display: flex;

    // Font & Text
    text-decoration: none;

    // Spacing
    padding: 20px;
  }

  .mails__item + .mails__item {
    // Border
    border-top: 1px solid #efefef;
  }

  .mails__item:hover {
    // Animation
    transition: all 0.2s;

    // Color
    opacity: 0.7;

    // Interactivity
    cursor: pointer;
  }

  .mails__item-column {
    // Flexbox
    align-items: start;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .mails__item-avatar {
    // Border
    border-radius: 50%;
  
    // Color
    background: hsl(180, 65, 30);
    color: #ffffff;

    // Flexbox
    align-items: center;
    align-self: stretch;
    display: flex;
    justify-content: center;

    // Sizing
    width: 40px;
    height: 40px;

    // Spacing
    margin-right: 30px;
  }

  .mails__item-title {
    // Flexbox
    align-self: flex-start;

    // Font & Text
    font-size: 15px;
    font-weight: 600;

    // Spacing
    margin-bottom: 5px;
  }

  .mails__item-body {
    color: #777777;

    // Font & Text
    font-size: 13px;
  }
</style>