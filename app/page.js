import Image from "next/image";
import { getProductBenchmarks, getExchangeRates } from "./lib/api";
import BenchmarkTable from "./components/ui/BenchmarkTable";
import PaymentTrendChart from "./components/ui/PaymentTrendChart";

const dummyTrendData = [
  { year: 2022, payment: 1100 },
  { year: 2023, payment: 1200 },
  { year: 2024, payment: 1250 },
];

export default async function Home() {
  const [productBenchmarksResult, exchangeRatesResult] = await Promise.all([
    getProductBenchmarks(),
    getExchangeRates(),
  ]);

  const { product_benchmarks } = productBenchmarksResult;
  const { exchange_rates } = exchangeRatesResult;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Payment Benchmark Analysis</h1>
      <BenchmarkTable
        benchmarks={product_benchmarks}
        exchange_rates={exchange_rates}
      />
      <h2 className="text-xl font-semibold mt-5">Payment Trend Over Years</h2>
      <PaymentTrendChart
        trendData={dummyTrendData}
        exchange_rates={exchange_rates}
        benchmarks={product_benchmarks}
      />
    </div>
  );
}
