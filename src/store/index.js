import { createStore } from "vuex";

const store = createStore({
  state: {
    favorites: [],
  },
  mutations: {
    addToFavorites(state, photo) {
        state.favorites.push(photo);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      },
  },
});

export default store;
