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
    }
  }
})

// 処理の流れ
// ブラウザでクリックなどのイベントが起こる
// actionsでAPIとの通信を挟む
// mutationsにactionsで通信したデータをコミットする
// stateに最終状態として挿入する