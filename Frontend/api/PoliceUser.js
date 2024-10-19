import {IP_ADDRESS} from '@env'

export const LoginPolice = async (inputData , ip) => {
    try {
        console.log(IP_ADDRESS);
      const response = await fetch(`http://${IP_ADDRESS}:8000/auth/login`, {
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