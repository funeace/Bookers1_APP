<template>
  <div>
    <p>Title: {{ book.title }}</p>
    <p>Body: {{ book.body }}</p>
    <router-link to="/books">Back</router-link>
  </div>
</template>

<script>
  import{ mapState } from 'vuex'

  export default{
    computed: {
      ...mapState(['books']),
      // 自分の位置を確認するための処理
      book() {
        return this.books.find(bookId => bookId.id === this.$route.params.id) || {}
      }
    }
  }
</script>