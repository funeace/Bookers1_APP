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
            <td>show</td>
            <td>Edit</td>
            <td>Destroy</td>
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
      onSubmit() {
      }
    }
  }
</script>
