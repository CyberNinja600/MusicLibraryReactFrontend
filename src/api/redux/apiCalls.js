import { publicRequest, userRequest } from "../axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";

export const login = async (dispatch, userCredentials) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/login', userCredentials);
    dispatch(loginSuccess(res.data));
  } 
  catch (error) {
    if (error.response && error.response.status === 403) {
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

export const fetchUser = async (dispatch, getState) => {
  try{
    const token = getState().user.currentUser?.token;  // Get token from Redux store
    const headers = token ? { Authorization: `${token}` } : {};
    const response = await userRequest.get('user', { headers });
    return { success: true, data: response.data };    
  }
  catch (error){
    dispatch(logout());
  }

};

export const fetchMyAlbum = async (dispatch, jwt_token) => {
  try{
    const token = jwt_token;
    const headers = token ? { Authorization: `${token}` } : {};
    const response = await userRequest.get('albums/list', {headers});
    return { success: true, data: response.data };
  }
  catch (error) {
    if(error.response.status == 403){
      dispatch(logout());
    }
    else{
      return {success: false, data: error.response? error.response.data : error.message};
    }
  }
};

export const fetchAllAlbum = async(dispatch, jwt_token) => {

  try{
    const token = jwt_token;
    const headers = token ? { Authorization: `${token}` } : {};
    const response = await userRequest.get('albums/list', {headers});
    return { success: true, data: response.data };
  }

  catch (error) {
    if(error.response.status == 403){
      dispatch(logout());
    }
    else{
      return {success: false, data: error.response? error.response.data : error.message};
    }
  }

};