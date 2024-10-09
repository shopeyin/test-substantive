import React from "react";
import { convertToEuros } from "@/app/lib/utils";

const BenchmarkTable = ({ benchmarks, exchange_rates }) => {
  const providerData = benchmarks.reduce((acc, benchmarkData) => {
    const { provider_name, payment, currency, benchmark, start_date } =
      benchmarkData;
    const year = new Date(start_date).getFullYear();
    const paymentInEuros = convertToEuros(
      payment,
      currency.id,
      year,
      exchange_rates
    );
    const benchmarkInEuros = convertToEuros(
      benchmark,
      currency.id,
      parseInt(year),
      exchange_rates
    );

    if (!acc[provider_name]) {
      acc[provider_name] = { totalPayments: 0, totalBenchmarks: 0 };
    }

    acc[provider_name].totalPayments += parseFloat(paymentInEuros);
    acc[provider_name].totalBenchmarks += parseFloat(benchmarkInEuros);

    return acc;
  }, {});

  for (const provider in providerData) {
    providerData[provider].totalPayments =
      providerData[provider].totalPayments.toFixed(2);
    providerData[provider].totalBenchmarks =
      providerData[provider].totalBenchmarks.toFixed(2);
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
        Payment Benchmark Analysis
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Provider Name</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Total Payments (€)</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">
                Total Benchmarks (€)
              </th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Difference (€)</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(providerData).map(([providerName, data]) => {
              const totalPayments = Number(data.totalPayments);
              const totalBenchmarks = Number(data.totalBenchmarks);
              const isOverBenchmark = totalPayments > totalBenchmarks;

              return (
                <tr key={providerName} className="border-b">
                  <td className="py-2 text-center px-3 sm:py-3 sm:px-4 text-gray-800">
                    {providerName}
                  </td>
                  <td className="py-2 px-3 text-center sm:py-3 sm:px-4 text-gray-800">
                    {data.totalPayments}
                  </td>
                  <td className="py-2 px-3 text-center sm:py-3 sm:px-4 text-gray-800">
                    {data.totalBenchmarks}
                  </td>
                  <td className="py-2 px-3 text-center sm:py-3 sm:px-4 text-gray-800">
                    {(totalBenchmarks - totalPayments).toFixed(2)}
                  </td>
                  <td className="py-2 px-3 text-center sm:py-3 sm:px-4">
                    <div
                      className={`text-xs sm:text-sm font-medium px-2 py-1 text-center sm:px-3 sm:py-2 rounded-full ${
                        isOverBenchmark
                          ? "bg-red-100 text-red-500"
                          : "bg-green-100 text-green-500"
                      }`}
                    >
                      {isOverBenchmark ? "Over Benchmark" : "Under Benchmark"}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BenchmarkTable;
