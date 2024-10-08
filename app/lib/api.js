export const getProductBenchmarks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product_benchmarks`,
      {
        headers: {
          "auth-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product benchmarks");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product benchmarks:", error);
    throw error;
  }
};

export const getExchangeRates = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/exchange_rates`,
      {
        headers: {
          "auth-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};
