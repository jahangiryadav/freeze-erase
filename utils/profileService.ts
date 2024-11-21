import axios from 'axios';
import { backendURL } from './constants';

interface ErrorResponse {
  message: string;
}


export const getProfileData = async (
  setProfile: (data: any) => void, 
  setError: (error: ErrorResponse | null) => void, 
  setLoading: (loading: boolean) => void
) => {
  setLoading(true); 
  try {
    const response = await axios.get(`${backendURL}/admin/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setProfile(response.data); 
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      setError({ message: err.response.data.message }); 
    } else {
      setError({ message: "An unexpected error occurred." }); 
    }
  } finally {
    setLoading(false); 
  }
};


export const logout = (redirectToLogin: () => void) => {
 
  localStorage.removeItem('token');
  localStorage.removeItem('profile')
  
  redirectToLogin();
};
