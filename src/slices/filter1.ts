import {createSlice} from '@reduxjs/toolkit';

//초기값 설정
const initialState = {
  number: 0,
};

const filter1Slice = createSlice({
  name: 'filter1',
  initialState,
  //동기
  reducers: {
    setSearchRequest(state, action) {
      state.number = action.payload.number;
    },
    //인원 수 증가
    increaseNumber(state) {
      state.number = state.number + 1;
    },
    //인원 수 감소
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

export default filter1Slice;
