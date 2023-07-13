import {combineReducers} from 'redux';
import userSlice from '../slices/user';
import storeMapSlice from '../slices/storeMap';

const rootReducer = combineReducers({
  //slice 내용 적으면 됨.
  user: userSlice.reducer,
  storeMap: storeMapSlice.reducer,
});

//typeScript의 Type error 피하기 위해 작성함.
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
