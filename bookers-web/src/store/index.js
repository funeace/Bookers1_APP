import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },

  // stateの状態を変更する時に使う
  mutations: {
    fetch_books(state, books){
      state.books = books
    },
    add_book(state, book){
      const books = state.books.concat(book)
      state.books = books
    },
    edit_book(state, book){
      state.books.forEach(b => {
        if(b.id === book.id){
          b = book
        }
      })
    },
    delete_book(state, book){
      const books = state.books.filter(b => b.id != book)
      state.books = books
    }
  },
  actions: {
    // mutationはcommitで呼び出す
    async fetchBooks({ commit }) {
      await axios().get('/books').then(res => {
        commit('fetch_books', res.data)
      })
    },
    async addBook({ commit }, book){
      const res = await axios().post('/books', book)
      const savedBook = res.data
      // mutationのadd_bookを呼び出す
      commit('add_book', savedBook)
      return savedBook
    },
    async editBook({ commit }, book ){
      console.log(book.id)
      const res = await axios().put(`/books/${book.id}`, book)
      const editBook = res.data
      commit('edit_book', editBook)
      return editBook
    },
    async deleteBook({ commit }, book) {
      await axios().delete(`/books/${book.id}`, book)
      commit('delete_book', book.id)
    }
  }
})

// 処理の流れ
// ブラウザでクリックなどのイベントが起こる
// actionsでAPIとの通信を挟む
// mutationsにactionsで通信したデータをコミットする
// stateに最終状態として挿入する