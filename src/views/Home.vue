<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div v-for="book in books" :key="book.name">
      {{ book.title }} by {{ book.author }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Book from "@/models/book";

// import { useStore } from "vuex";
// import { key } from "@/store";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  books: Array<Book> = [];

  created() {
    // const store = useStore(key);
    this.books = this.$store.getters.getBooks;
    // this.$store.getBooks();
    console.log(this.$store);
    // this.books = this.$store.getters.getBooks();
    // this.$
  }
}
</script>
