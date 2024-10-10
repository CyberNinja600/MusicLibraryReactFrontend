import { publicRequest } from "../axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";


export const login = async (dispatch, userCredentials) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post('/login', userCredentials);
      dispatch(loginSuccess(res.data));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Invalid email or password'); 
      }
      dispatch(loginFailure());
      throw error;
    }
  };