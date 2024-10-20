import {IP_ADDRESS} from '@env'

export const GetVehicleUser = async () => {
    try {

      const response = await fetch(`http://192.168.162.93:8000/challan/get_vehicle`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // equivalent to `withCredentials: true`
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