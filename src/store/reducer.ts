import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  //slice 내용 적으면 됨.
});

//typeScript의 Type error 피하기 위해 작성함.
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
