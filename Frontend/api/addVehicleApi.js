import {IP_ADDRESS} from '@env'


export const AddVehicleUser = async (inputData) => {
    try {
      const response = await fetch(`http://${IP_ADDRESS}:8000/challan/add_vehicle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // equivalent to `withCredentials: true` in axios
        body: JSON.stringify(inputData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json(); // parse response as JSON
      return result;
  
    } catch (error) {
      console.error(error.message);
    }
  };