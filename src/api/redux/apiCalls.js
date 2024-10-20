import { publicRequest } from "../axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";


export const login = async (dispatch, userCredentials) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/login', userCredentials);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    if (error.response && error.response.status === 403) {
      // throw new Error('Invalid email or password');
      alert("Invalid email")
      dispatch(loginFailure());
    }
    else{
      throw error;
    }
  }
};

export const logoutApi = async (dispatch) => { 
  await publicRequest.post('/logout');
  dispatch(logout());
}