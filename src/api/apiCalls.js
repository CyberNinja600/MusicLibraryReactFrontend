import { publicRequest } from '../requestMethods';

// Auth APIs
export const login = async (userCredentials) => {
  try {
    // Make a POST request to the login endpoint
    const response = await publicRequest.post('/login', userCredentials);

    // Extract the JWT from the response
    const { token } = response.data;
    console.log(token);

    return { success: true, data: response.data };
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 401) {
      return { success: false, message: 'Invalid email or password' };
    }
    return { success: false, message: error.message };
  }
};
