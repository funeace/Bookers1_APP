<template>
  <div>
    <h2>Editing Book</h2>
    <form>
      <v-text-field
        v-model="book.title"
        label="Title"
      ></v-text-field>
      <v-textarea
        v-model="book.body"
        label="Body"
      ></v-textarea>

      <v-btn class="mr-4" @click="updateBook">Update</v-btn>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['books']),
    book() {
      return this.books.find(b => b.id == this.$route.params.id) || {}
    }
  },
  methods: {
    async updateBook() {
      const book = await this.$store.dispatch('editBook', this.book)
      this.$router.push({ name: 'book-show', params: { id: book.id }})
    }
  }
}
</script>