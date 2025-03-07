import axios from 'axios';

export const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`);
    return response.data[fromCurrency][toCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate:', error.response ? error.response.data : error.message);
    return null; // or handle the error as needed
  }
};

