import {createSlice} from '@reduxjs/toolkit';

//초기값 설정
const initialState = {
  detailVisible: false,
};

const storeModalSlice = createSlice({
  name: 'storeModal',
  initialState,
  //동기
  reducers: {
    setDetailVisible(state) {
      state.detailVisible = !state.detailVisible;
    },
  },
  //비동기
  extraReducers: builder => {},
});

export default storeModalSlice;
