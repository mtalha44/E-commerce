// src/utils/api.js

/**
 * Fetch clothes data from the API
 * @returns {Promise<Array>} Array of clothes data
 * @throws {Error} If the fetch request fails
 */
export const fetchClothesData = async () => {
    const url = 'https://api.escuelajs.co/api/v1/products/?price_min=20&price_max=1000&offset=0&limit=8';
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error occurred: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching clothes data:", error);
      throw error; // Propagate the error so it can be handled by the caller
    }
  };
  