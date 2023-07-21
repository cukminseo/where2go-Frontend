import {combineReducers} from 'redux';
import storeMapSlice from '../slices/storeMap';
import filter1Slice from '../slices/filter1';
import filter2Slice from '../slices/filter2';
import filter3Slice from '../slices/filter3';
import filter4Slice from '../slices/filter4';
import storeModalSlice from '../slices/storeModal';

const rootReducer = combineReducers({
  //slice 내용 적으면 됨.
  storeMap: storeMapSlice.reducer,
  filter1: filter1Slice.reducer,
  filter2: filter2Slice.reducer,
  filter3: filter3Slice.reducer,
  filter4: filter4Slice.reducer,
  storeModal: storeModalSlice.reducer,
});

//typeScript의 Type error 피하기 위해 작성함.
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
