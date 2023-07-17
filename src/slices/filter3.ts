import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface filter3 {
  liquor_id: number;
  liquor_name: string;
  liquor_prefer: boolean;
}

interface InitialState {
  liquors: filter3[];
}
//초기값 설정
const initialState: InitialState = {
  liquors: [],
};

const filter3Slice = createSlice({
  name: 'filter3',
  initialState,
  //동기
  reducers: {
    //주종 등록
    setLiquors(state, action: PayloadAction<filter3>) {
      state.liquors.push(action.payload);
    },
  },
  //비동기
  extraReducers: builder => {},
});

export default filter3Slice;
