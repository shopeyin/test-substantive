import { convertToEuros } from "@/app/lib/utils";

const BenchmarkTable = ({ benchmarks, exchange_rates }) => {
  const providerData = benchmarks.reduce((acc, benchmark) => {
    const {
      provider_name,
      payment,
      currency,
      benchmark: benchmarkValue,
      start_date,
    } = benchmark;

    // Extract year from start_date
    const year = new Date(start_date).getFullYear(); // Extracts year from start_date

    // Convert payment and benchmark to Euros
    const paymentInEuros = convertToEuros(
      payment,
      currency.id,
      year,
      exchange_rates
      );
      // Assuming currency ID for GBP is 2
     
    //    console.log(payment, currency.id, year, exchange_rates, 'INSIDE HERE', paymentInEuros);
    const benchmarkInEuros = convertToEuros(
      benchmarkValue,
      currency.id,
      year,
      exchange_rates
    ); // Assuming currency ID for GBP is 2
    // console.log(paymentInEuros, "PAYMENTINEUROS");
    // console.log(benchmarkInEuros, "BENCHMARKINEUROS");
    // Initialize provider data if it doesn't exist
    if (!acc[provider_name]) {
      acc[provider_name] = {
        totalPayments: 0,
        totalBenchmarks: 0,
      };
    }

    acc[provider_name].totalPayments += parseFloat(paymentInEuros); // Convert to float for summing
    acc[provider_name].totalBenchmarks += parseFloat(benchmarkInEuros); // Convert to float for summing

    return acc;
  }, {});

  // Format total payments and benchmarks to 2 decimal places
  for (const provider in providerData) {
    providerData[provider].totalPayments =
      providerData[provider].totalPayments.toFixed(2);
    providerData[provider].totalBenchmarks =
      providerData[provider].totalBenchmarks.toFixed(2);
  }

  console.log(providerData);
  return (
    <div className="overflow-x-auto mt-5">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Provider Name</th>
              <th className="py-2 px-4">Total Payments (€)</th>
              <th className="py-2 px-4">Total Benchmarks (€)</th>
              <th className="py-2 px-4">Difference(€)</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(providerData).map(([providerName, data]) => {
              const totalPayments = Number(data.totalPayments);
              const totalBenchmarks = Number(data.totalBenchmarks);
              const isOverBenchmark = totalPayments > totalBenchmarks;
              return (
                <tr key={providerName} className="text-center border-b">
                  <td className="py-2 px-4 text-gray-800">{providerName}</td>
                  <td className="py-2 px-4 text-gray-800">
                    {data.totalPayments}
                  </td>
                  <td className="py-2 px-4 text-gray-800">
                    {data.totalBenchmarks}
                  </td>
                  <td className="py-2 px-4 text-gray-800">
                    {(
                      Number(data.totalBenchmarks) - Number(data.totalPayments)
                    ).toFixed(2)}
                  </td>
                  {/* <td className="py-2 px-4 text-gray-800">
                    {overPaid ? "YES" : "NO"}
                  </td> */}
                  <td
                    className={`py-2 px-4 font-semibold ${
                      isOverBenchmark ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    <div
                      className={`text-sm font-medium px-3 py-2 rounded-full ${
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
