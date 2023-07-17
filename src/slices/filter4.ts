import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface filter4 {
  preferRegion_id: number;
}

interface InitialState {
  preferRegion: filter4[];
}
//초기값 설정
const initialState: InitialState = {
  preferRegion: [],
};

const filter4Slice = createSlice({
  name: 'filter4',
  initialState,
  //동기
  reducers: {
    //선호지역 등록
    setLiquors(state, action: PayloadAction<filter4>) {
      state.preferRegion.push(action.payload);
    },
  },
  //비동기
  extraReducers: builder => {},
});

export default filter4Slice;
