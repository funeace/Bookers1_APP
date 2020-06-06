<template>
  <div>
    <h1>Edit</h1>
    <form>
      <v-text-field v-model="book.title" label="Title"></v-text-field>
      <v-textarea v-model="book.body" label="Body"></v-textarea>
      
      <v-btn @click="updateBook">Update</v-btn>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default{
    computed: {
      ...mapState(['books']),
      book() {
        return this.book.find(b => b.id == this.$route.params.id) || {}
      }
    },
    methods: {
      async updateBook() {
        const book = await this.$store.dispatch('editBook', this.book)
        this.$router.push({ name: 'edit-book', params: {id: book.id}})
      }
    }
  }
</script>