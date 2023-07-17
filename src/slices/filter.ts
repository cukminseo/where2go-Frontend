import {PayloadAction, createSlice} from '@reduxjs/toolkit';

//초기값 설정
const initialState = {
  number: 0,
  category: 0,
  liquor: 0,
  searchWord: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  //동기
  reducers: {
    setSearchRequest(state, action) {
      state.number = action.payload.number;
      state.category = action.payload.category;
      state.liquor = action.payload.liquor;
      state.searchWord = action.payload.searchWord;
    },
    increaseNumber(state) {
      state.number = state.number + 1;
    },
    decreaseNumber(state) {
      state.number = state.number - 1;
      if (state.number < 0) {
        state.number = 0;
      }
    },
    setNumber(state) {
      state.number = 0;
    },
  },
  //비동기
  extraReducers: builder => {},
});

export default filterSlice;
