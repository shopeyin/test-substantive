import { Card, CardHeader, CardContent } from "@/components/ui/card";

const DataFindingsDescription = ({ productData, years }) => {
  const totalProducts = productData.length;

  const totalProviders = new Set(productData.map((item) => item.provider_name))
    .size;

  const yearlyTotals = productData.reduce((acc, product) => {
    years.forEach((year) => {
      if (product[year]) {
        acc[year] = (acc[year] || 0) + product[year];
      }
    });
    return acc;
  }, {});

  const overallTrend =
    yearlyTotals["2024"] > yearlyTotals["2021"] ? "increasing" : "decreasing";

  const highestPayment = Math.max(
    ...productData.flatMap((product) => years.map((year) => product[year] || 0))
  );

  const highestPaymentProduct = productData.find((product) =>
    years.some((year) => product[year] === highestPayment)
  );

  return (
    <Card className="mt-6">
      <CardHeader>
        <h2 className="text-2xl font-bold">Key Findings</h2>
      </CardHeader>
      <CardContent>
        <p>
          The payment trend analysis covers {totalProducts} products from{" "}
          {totalProviders} providers over the years 2021 to 2024. Here are the
          key insights:
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>
            Overall Trend: The total payments across all products show an{" "}
            {overallTrend} trend from 2021 to 2024.
          </li>

          <li>
            Highest Payment: The highest single payment recorded was €
            {highestPayment.toFixed(2)} for the product "
            {highestPaymentProduct?.product_name}" provided by{" "}
            {highestPaymentProduct?.provider_name}.
          </li>

          <li>
            Yearly Totals:
            <ul className="list-circle pl-5 mt-1">
              {Object.entries(yearlyTotals).map(([year, total]) => (
                <li key={year}>
                  {year}: €{total.toFixed(2)}
                </li>
              ))}
            </ul>
          </li>

          <li>
            Product Diversity: The data shows a wide range of products with
            varying payment structures across different providers.
          </li>

          <li>
            Provider Comparison: Users can compare payment trends between
            different providers using the filter functionality in the chart.
          </li>
        </ul>

        <p className="mt-4">
          These findings provide a high-level overview of the payment trends.
          For more detailed insights, interact with the chart, filtering by
          specific providers and examining individual product trends.
        </p>
      </CardContent>
    </Card>
  );
};

export default DataFindingsDescription;
