import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  userDetails: {
    full_name: '',
    phone: '',
    next_payment_date: '',
    is_paid: ''
  },
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userToken = `${action.payload.data.access_token}`;
      state.userDetails = {
        full_name: action.payload.data.user_name,
        phone: action.payload.data.phone,
        next_payment_date: action.payload.data.next_payment_date,
        is_paid: action.payload.data.is_paid
      };
      state.isAuthenticated = true;
    },
    logoutSuccess: state => {
      state.userToken = null;
      (state.userDetails = {
        full_name: '',
        phone: '',
        next_payment_date: '',
        is_paid: ''
      }),
        (state.isAuthenticated = false);
    }
  }
});
export const { logoutSuccess, loginSuccess } = authSlice.actions;

export default authSlice.reducer;

// export const selectCurrentToken = (state) => initialState.userToken
export const userToken = initialState.userToken;
