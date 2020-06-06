<template>
  <div id="app">
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    // dispatchでvuexのactionを呼び出す
    this.$store.dispatch('fetchBooks')
  }
}
</script>