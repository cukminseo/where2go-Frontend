import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
const storeMapSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction) {
      state.filter.push(action.payload);
    },
  },
  extraReducers: builder => {},
});

export default storeMapSlice;
