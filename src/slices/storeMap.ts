import {PayloadAction, createSlice} from '@reduxjs/toolkit';

//* 기본 주점, 검색 결과에 따른 주점

export interface Store {
  restaurant_id: number;
  restaurant_name: string;
  latitude: number;
  longitude: number;
}

interface InitialState {
  defaultStores: Store[];
  searchStores: Store[];
}

//초기값 설정
const initialState: InitialState = {
  defaultStores: [],
  searchStores: [],
};
const storeMapSlice = createSlice({
  name: 'store',
  initialState,
  //동기
  reducers: {
    setStore(state, action: PayloadAction<Store>) {
      state.defaultStores.push(action.payload);
    },
    setSearchStore(state, action: PayloadAction<Store>) {
      state.searchStores.push(action.payload);
    },
  },
  //비동기
  extraReducers: builder => {},
});

export default storeMapSlice;
