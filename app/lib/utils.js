
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

