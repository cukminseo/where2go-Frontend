import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface filter2 {
  category_id: number;
  category_name: string;
  category_prefer: boolean;
  category_checked: boolean;
}

interface InitialState {
  categories: filter2[];
}
//초기값 설정
const initialState: InitialState = {
  categories: [],
};

const filter2Slice = createSlice({
  name: 'filter2',
  initialState,
  //동기
  reducers: {
    //주점 등록
    setCategory(state, action: PayloadAction<filter2>) {
      state.categories.push(action.payload);
    },
  },
  //비동기
  extraReducers: builder => {},
});

export default filter2Slice;
