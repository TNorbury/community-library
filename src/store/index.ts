import Book from "@/models/book";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface BookStoreState {
  books: Array<Book>;
}

export const key: InjectionKey<Store<BookStoreState>> = Symbol();

export default createStore<BookStoreState>({
  state: {
    books: [
      {
        title: "Slaughterhouse Five",
        author: "Kurt Vonnegut"
      },
      {
        title: "The Enneagram: A Christian Perspective",
        author: "Richard Rohr"
      }
    ]
  },
  mutations: {},
  actions: {},
  // modules: {}
  getters: {
    getBooks(state: BookStoreState): Array<Book> {
      return state.books;
    }
  }
});
