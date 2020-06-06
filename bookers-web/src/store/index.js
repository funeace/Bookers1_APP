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
    }
  },
  actions: {
    // mutationはcommitで呼び出す
    async fetchBooks({ commit }) {
      await axios().get('/books').then(res => {
        commit('fetch_books', res.data)
      })
    }
  }
})

// 処理の流れ
// ブラウザでクリックなどのイベントが起こる
// actionsでAPIとの通信を挟む
// mutationsにactionsで通信したデータをコミットする
// stateに最終状態として挿入する