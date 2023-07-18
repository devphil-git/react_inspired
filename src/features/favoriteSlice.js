import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = 'favorites';

const initialState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : [];

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const id = action.payload.id;
      if (!state.includes(id)) {
        state.push(id);
        localStorage.setItem(localStorageKey, JSON.stringify(state));
      }
    },
    removeFromFavorite(state, action) {
      const id = action.payload.id;
      const index = state.indexOf(id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(state));
      }
    }
  }
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;