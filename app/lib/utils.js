
export  function convertToEuros(payment, currencyId, year, exchangeRates) {
    // If currency ID is 3 (Euros), return the payment without conversion
    if (currencyId === 3) {
        return payment;
    }

    // Find the exchange rate for the given currency ID and year
    const exchangeRateData = exchangeRates.find(rate => rate.from_currency_id === currencyId && rate.year === year);

    // If an exchange rate is found, convert the payment; otherwise, return null or an error message
    if (exchangeRateData) {
        return payment * exchangeRateData.exchange_rate;
    } else {
        console.error("Exchange rate not found for the given currency ID and year.");
        return null;
    }
}


export const transformData = (data, exchange_rates) => {
    const transformedData = {};
  
    data.forEach((item) => {
      const { product_name, provider_name, currency, payment, start_date } = item;
  
        const year = new Date(start_date).getFullYear().toString();
        
      if (!transformedData[product_name]) {
        transformedData[product_name] = {
          product_name,
          provider_name,
        };
      }
      const convertedPayment = convertToEuros(
        payment,
        currency.id,
        parseInt(year),
        exchange_rates
      );
      transformedData[product_name][year] = parseFloat(
        convertedPayment.toFixed(2)
      );
    });
  
    return Object.values(transformedData);
  };