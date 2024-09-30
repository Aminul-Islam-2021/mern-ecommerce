// features/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  setSearch,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
} = filterSlice.actions;

export const selectFilters = (state) => state.filters;

export default filterSlice.reducer;
