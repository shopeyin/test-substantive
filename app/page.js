import { getProductBenchmarks, getExchangeRates } from "./lib/api";
import BenchmarkTable from "@/components/ui/BenchmarkTable";
import PaymentTrendChart from "@/components/ui/PaymentTrendChart";

export default async function Home() {
  let productBenchmarksResult;
  let exchangeRatesResult;

  try {
    [productBenchmarksResult, exchangeRatesResult] = await Promise.all([
      getProductBenchmarks(),
      getExchangeRates(),
    ]);
  } catch (error) {
    console.error(error);
    return (
      <div className="max-w-7xl mx-auto p-6">
        <p>Error fetching data: {error.message}</p>
      </div>
    );
  }

  const { product_benchmarks } = productBenchmarksResult || {};
  const { exchange_rates } = exchangeRatesResult || {};

  const hasBenchmarks = product_benchmarks && product_benchmarks.length > 0;
  const hasExchangeRates = exchange_rates && exchange_rates.length > 0;

  return (
    <>
      {hasBenchmarks && hasExchangeRates ? (
        <>
          <BenchmarkTable
            benchmarks={product_benchmarks}
            exchange_rates={exchange_rates}
          />

          <PaymentTrendChart
            exchange_rates={exchange_rates}
            benchmarks={product_benchmarks}
          />
        </>
      ) : (
        <p>No data available to display.</p>
      )}
    </>
  );
}
