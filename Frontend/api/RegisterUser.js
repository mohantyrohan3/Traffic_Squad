import {IP_ADDRESS} from '@env'

export const RegisterUser = async (inputData) => {
    try {
        console.log(IP_ADDRESS);
        const response = await fetch(`http://${IP_ADDRESS}:8000/auth/register_user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // equivalent to `withCredentials: true`
        body: JSON.stringify(inputData)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error(error.message);
    }
  };