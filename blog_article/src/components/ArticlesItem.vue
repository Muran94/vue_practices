<template>
  <router-link class="articles__item" :to="`/articles/${12}`">
    <img src="https://i.discogs.com/txwfZBYDvdK2_f0o4rsQXNbsGS4IQS9U0LmGybWMLh8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTgyNzMw/LTE0MTk3MTQ5ODgt/OTY3NS5qcGVn.jpeg" alt="ブログ画像" class="articles__item-image"/>
    <div class="articles__item-title">ブログ記事 | テストです。無視しないでください。</div>
    <div class="articles__item-published-at">2022/03/27 12:51</div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: '',
      title: '',
      publishedAt: '',
    }
  }
}
</script>

