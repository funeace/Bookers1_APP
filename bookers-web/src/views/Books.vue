<template>
  <div>
    <h1>Books</h1>
    <v-row>
      <!-- 投稿一覧 -->
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th colspan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.body }}</td>
            <td><router-link :to="{name: 'book-show', params:{id: book.id}}">Show</router-link></td>
            <td><router-link :to="{name: 'book-edit', params:{id: book.id}}">Edit</router-link></td>
            <td><button @click="deleteBook(book)">Destroy</button></td>
          </tr>
        </tbody>
      </table>
    </v-row>

    <v-row>
      <v-col>
        <form>
          <v-text-field v-model="book.title" label="Title">
          </v-text-field>
          <v-textarea v-model="book.body" label="Book"></v-textarea>
          <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  // vuexのヘルパーをよびだす(先はstore/index.jsのstate)
  import {mapState} from 'vuex'

  export default{
    computed: {
      ...mapState(['books'])
    },
    data() {
      return {
        book: {}
      }
    },
    methods: {
      async onSubmit() {
        // vuexのaddBookアクションを呼び出す
        const book = await this.$store.dispatch('addBook', this.book)
        this.$router.push({name: 'book-show',params: {id: book.id}})
        this.book.title = ""
        this.book.body = ""
      },
      deleteBook(book) {
        this.$store.dispatch('deleteBook', book)
      }
    }
  }
</script>
