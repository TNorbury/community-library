// vuex.d.ts
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  // interface BookStoreState {
  //   books: Array<Book>;
  // }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store;
  }
}
