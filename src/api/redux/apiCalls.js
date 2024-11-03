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


export const register = async (userCredentials) => {
  try {
    const response = await publicRequest.post('/register', userCredentials);
    return {success: true, data:response.data}
  }
  catch (error) {
    return {success: false, data: error.response? error.response.data : error.message};
  }
}