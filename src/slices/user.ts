import {createSlice} from '@reduxjs/toolkit';
//action- state 변경
//dispatch- 실제 실행
//reducer- 액션이 실제로 실행되면 state를 바꾸는 로직
const initialState = {
  userType: '',
  name: '',
  email: '',
  accessToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserType(state, action) {
      state.userType = action.payload.userType;
    },
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
