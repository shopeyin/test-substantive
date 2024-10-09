"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { transformData } from "@/app/lib/utils";
import DataFindingsDescription from "./DataFindingsDescription";
import BarChartSkeletonLoader from "./BarChartSkeletonLoader";

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

const PaymentTrendChart = ({ benchmarks, exchange_rates }) => {
  const [selectedProvider, setSelectedProvider] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const productData = useMemo(
    () => transformData(benchmarks, exchange_rates),
    [benchmarks, exchange_rates]
  );
  console.log(productData);
  const filteredData = useMemo(
    () =>
      selectedProvider === "All"
        ? productData
        : productData.filter((item) => item.provider_name === selectedProvider),
    [productData, selectedProvider]
  );

  const providers = useMemo(
    () => ["All", ...new Set(productData.map((item) => item.provider_name))],
    [productData]
  );

  const yearsSet = new Set();
  productData.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!isNaN(key)) {
        yearsSet.add(Number(key));
      }
    });
  });

  const years = Array.from(yearsSet).sort((a, b) => a - b);

  if (isLoading) {
    return <BarChartSkeletonLoader />;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Card className="w-full">
        <CardHeader>
          <h2 className="text-2xl font-bold">Product Payment Trends</h2>
          <div className="flex items-center space-x-2">
            <span>Provider:</span>
            <Select
              onValueChange={setSelectedProvider}
              defaultValue={selectedProvider}
            >
              <SelectTrigger className="w-full min-w-[180px]">
                <SelectValue placeholder="Select a provider" />
              </SelectTrigger>
              <SelectContent>
                {providers.map((provider) => (
                  <SelectItem key={provider} value={provider}>
                    {provider}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[600px] overflow-x-auto overflow-y-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="product_name"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={100}
                />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`€${value}`, "Payment"]}
                  labelFormatter={(label) => `Product: ${label}`}
                />
                <Legend />
                {years.map((year, index) => (
                  <Bar
                    key={year}
                    dataKey={year}
                    fill={colors[index]}
                    name={year}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <DataFindingsDescription productData={productData} years={years} />
    </div>
  );
};

export default PaymentTrendChart;
