import { createSlice } from "@reduxjs/toolkit";

// Obtém o valor atual do localStorage ou define como true se não houver valor.
const storedDarkTheme = localStorage.getItem('darkTheme') === 'true';

const initialState = {
  darkTheme: storedDarkTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      try {
        const newDarkTheme = !state.darkTheme;
        state.darkTheme = newDarkTheme;
        localStorage.setItem('darkTheme', newDarkTheme ? 'true' : 'false');
      } catch (error) {
        console.error('Failed to toggle theme:', error);
      }
     
    },
    resetLocalStorage: (state, action) => {
      state.darkTheme = action.payload;
      localStorage.setItem('darkTheme', action.payload ? 'true' : 'false');
    },
  },
});

export const { toggleTheme, resetLocalStorage } = themeSlice.actions;

export default themeSlice.reducer;
