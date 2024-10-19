import {IP_ADDRESS} from '@env'


export const AddChallanApi = async (inputData) => {
    try {
      const response = await fetch(`http://${IP_ADDRESS}:8000/challan/register_challan`, {
        method: 'POST',
        headers: {
          'Content-Type': "multipart/form-data",
        },
        credentials: 'include', // equivalent to `withCredentials: true` in axios
        body: inputData, // directly pass inputData as body for multipart/form-data
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