// "use client";
// import React, { useState } from "react";
// // import { Bar } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";
// import { convertToEuros } from "@/app/lib/utils";

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// // const transformData = (data, exchange_rates) => {
// //   const transformedData = {};

// //   data.forEach((item) => {
// //     const { product_name, provider_name, currency, payment, start_date } = item;

// //     const year = new Date(start_date).getFullYear();
// //     if (!transformedData[product_name]) {
// //       transformedData[product_name] = {
// //         product_name,
// //         provider_name,
// //       };
// //     }
// //     let convertedPayment = convertToEuros(
// //       payment,
// //       currency.id,
// //       year,
// //       exchange_rates
// //     );
// //     transformedData[product_name][year] = convertedPayment.toFixed(2);
// //   });

// //   return Object.values(transformedData);
// // };
// // let newdata = {
// //   product_benchmarks: [
// //     {
// //       id: 1,
// //       provider_name: "Globex Brokers",
// //       product_name: "Global Indexes",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 250300,
// //       benchmark: 300000,
// //     },
// //     {
// //       id: 2,
// //       provider_name: "Globex Brokers",
// //       product_name: "Global Indexes",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 270324,
// //       benchmark: 324000,
// //     },
// //     {
// //       id: 3,
// //       provider_name: "Globex Brokers",
// //       product_name: "Global Indexes",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 291950,
// //       benchmark: 349920,
// //     },
// //     {
// //       id: 4,
// //       provider_name: "Globex Brokers",
// //       product_name: "DataTrendz",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 190000,
// //       benchmark: 120000,
// //     },
// //     {
// //       id: 5,
// //       provider_name: "Globex Brokers",
// //       product_name: "DataTrendz",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 205200,
// //       benchmark: 129600,
// //     },
// //     {
// //       id: 6,
// //       provider_name: "Globex Brokers",
// //       product_name: "DataTrendz",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 221616,
// //       benchmark: 139968,
// //     },
// //     {
// //       id: 7,
// //       provider_name: "Globex Brokers",
// //       product_name: "TradeInsight",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 20000,
// //       benchmark: 40000,
// //     },
// //     {
// //       id: 8,
// //       provider_name: "Globex Brokers",
// //       product_name: "TradeInsight",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 54000,
// //       benchmark: 43200,
// //     },
// //     {
// //       id: 9,
// //       provider_name: "Globex Brokers",
// //       product_name: "EconoMetrics",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 100000,
// //       benchmark: 78650,
// //     },
// //     {
// //       id: 10,
// //       provider_name: "Globex Brokers",
// //       product_name: "EconoMetrics",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 68900,
// //       benchmark: 78650,
// //     },
// //     {
// //       id: 11,
// //       provider_name: "Globex Brokers",
// //       product_name: "EconoMetrics",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 93000,
// //       benchmark: 86515,
// //     },
// //     {
// //       id: 12,
// //       provider_name: "Tyrell Insights",
// //       product_name: "QuantiFlow",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 230000,
// //       benchmark: 1234556,
// //     },
// //     {
// //       id: 13,
// //       provider_name: "Tyrell Insights",
// //       product_name: "QuantiFlow",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 248400,
// //       benchmark: 1333320,
// //     },
// //     {
// //       id: 14,
// //       provider_name: "Tyrell Insights",
// //       product_name: "QuantiFlow",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 268272,
// //       benchmark: 1439986,
// //     },
// //     {
// //       id: 15,
// //       provider_name: "Tyrell Insights",
// //       product_name: "PriceGrid",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 123400,
// //       benchmark: 220000,
// //     },
// //     {
// //       id: 16,
// //       provider_name: "Tyrell Insights",
// //       product_name: "PriceGrid",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 133272,
// //       benchmark: 237600,
// //     },
// //     {
// //       id: 17,
// //       provider_name: "Tyrell Insights",
// //       product_name: "StockSage",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 90000,
// //       benchmark: 100000,
// //     },
// //     {
// //       id: 18,
// //       provider_name: "Tyrell Insights",
// //       product_name: "StockSage",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 97200,
// //       benchmark: 108000,
// //     },
// //     {
// //       id: 19,
// //       provider_name: "Tyrell Insights",
// //       product_name: "StockSage",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 120000,
// //       benchmark: 116640,
// //     },
// //     {
// //       id: 20,
// //       provider_name: "Tyrell Insights",
// //       product_name: "MarketLytics",
// //       start_date: "2021-01-01",
// //       end_date: "2021-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 200000,
// //       benchmark: 220000,
// //     },
// //     {
// //       id: 21,
// //       provider_name: "Tyrell Insights",
// //       product_name: "MarketLytics",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 216000,
// //       benchmark: 237600,
// //     },
// //     {
// //       id: 22,
// //       provider_name: "Tyrell Insights",
// //       product_name: "MarketLytics",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 233280,
// //       benchmark: 256608,
// //     },
// //     {
// //       id: 23,
// //       provider_name: "Tyrell Insights",
// //       product_name: "MarketLytics",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 251942,
// //       benchmark: 277137,
// //     },
// //     {
// //       id: 24,
// //       provider_name: "Tyrell Insights",
// //       product_name: "PriceIQ",
// //       start_date: "2021-01-01",
// //       end_date: "2021-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 10000,
// //       benchmark: 7000,
// //     },
// //     {
// //       id: 25,
// //       provider_name: "Tyrell Insights",
// //       product_name: "PriceIQ",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 10800,
// //       benchmark: 7560,
// //     },
// //     {
// //       id: 26,
// //       provider_name: "Tyrell Insights",
// //       product_name: "PriceIQ",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 11664,
// //       benchmark: 8165,
// //     },
// //     {
// //       id: 27,
// //       provider_name: "Tyrell Insights",
// //       product_name: "PriceIQ",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 9700,
// //       benchmark: 8818,
// //     },
// //     {
// //       id: 28,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "AlphaData",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 150000,
// //       benchmark: 200000,
// //     },
// //     {
// //       id: 29,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "AlphaData",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 147000,
// //       benchmark: 200000,
// //     },
// //     {
// //       id: 30,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "AlphaData",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 190000,
// //       benchmark: 220000,
// //     },
// //     {
// //       id: 31,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "FinScope",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 22000,
// //       benchmark: 20000,
// //     },
// //     {
// //       id: 32,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "FinScope",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 23760,
// //       benchmark: 22000,
// //     },
// //     {
// //       id: 33,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "FinScope",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 25661,
// //       benchmark: 24200,
// //     },
// //     {
// //       id: 34,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "EconoVision",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 100000,
// //       benchmark: 100000,
// //     },
// //     {
// //       id: 35,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "EconoVision",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 100500,
// //       benchmark: 101000,
// //     },
// //     {
// //       id: 36,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "EconoVision",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 101003,
// //       benchmark: 102010,
// //     },
// //     {
// //       id: 37,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "TradeWire",
// //       start_date: "2021-01-01",
// //       end_date: "2021-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 15000,
// //       benchmark: 25000,
// //     },
// //     {
// //       id: 38,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "TradeWire",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 20000,
// //       benchmark: 25500,
// //     },
// //     {
// //       id: 39,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "TradeWire",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 15000,
// //       benchmark: 28000,
// //     },
// //     {
// //       id: 40,
// //       provider_name: "Skynet Market Solutions Alpha",
// //       product_name: "TradeWire",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 22000,
// //       benchmark: 28000,
// //     },
// //     {
// //       id: 41,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "DataSpectrum",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 45632,
// //       benchmark: 50000,
// //     },
// //     {
// //       id: 42,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "DataSpectrum",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 1,
// //         name: "USD",
// //         symbol: "$",
// //       },
// //       payment: 55690,
// //       benchmark: 65000,
// //     },
// //     {
// //       id: 43,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "MarketSphere",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 123123,
// //       benchmark: 125000,
// //     },
// //     {
// //       id: 44,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "MarketSphere",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 132973,
// //       benchmark: 135000,
// //     },
// //     {
// //       id: 45,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "MarketSphere",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 143611,
// //       benchmark: 145800,
// //     },
// //     {
// //       id: 46,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "PriceWave",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 22000,
// //       benchmark: 20000,
// //     },
// //     {
// //       id: 47,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "PriceWave",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 27000,
// //       benchmark: 34000,
// //     },
// //     {
// //       id: 48,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "PriceWave",
// //       start_date: "2024-01-01",
// //       end_date: "2024-12-31",
// //       currency: {
// //         id: 2,
// //         name: "GBP",
// //         symbol: "£",
// //       },
// //       payment: 38000,
// //       benchmark: 35000,
// //     },
// //     {
// //       id: 49,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "DataVista",
// //       start_date: "2022-01-01",
// //       end_date: "2022-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 45000,
// //       benchmark: 20000,
// //     },
// //     {
// //       id: 50,
// //       provider_name: "Gringotts Research Gold Index",
// //       product_name: "DataVista",
// //       start_date: "2023-01-01",
// //       end_date: "2023-12-31",
// //       currency: {
// //         id: 3,
// //         name: "EUR",
// //         symbol: "€",
// //       },
// //       payment: 45000,
// //       benchmark: 23000,
// //     },
// //   ],
// // };

// const transformData = (data, exchange_rates) => {
//   const productCounts = {};
//   const transformedData = {};

//   // First pass: count occurrences of each product
//   data.forEach((item) => {
//     const { product_name } = item;
//     productCounts[product_name] = (productCounts[product_name] || 0) + 1;
//   });

//   // Second pass: transform data for products appearing more than once
//   data.forEach((item) => {
//     const { product_name, provider_name, currency, payment, start_date } = item;
//     const year = new Date(start_date).getFullYear();

//     if (productCounts[product_name] > 1) {
//       if (!transformedData[product_name]) {
//         transformedData[product_name] = {
//           product_name,
//           provider_name,
//         };
//       }

//       let convertedPayment = convertToEuros(
//         payment,
//         currency.id,
//         year,
//         exchange_rates
//       );
//       transformedData[product_name][year] = convertedPayment.toFixed(2);
//     }
//   });

//   return Object.values(transformedData);
// };

// // const processData = (data) => {
// //   const years = Array.from(
// //     new Set(
// //       data.flatMap((item) =>
// //         Object.keys(item).filter(
// //           (key) => key !== "product_name" && key !== "provider_name"
// //         )
// //       )
// //     )
// //   );
// //   const datasets = data
// //     .filter((item) => Object.keys(item).length > 2) // More than one year of payments
// //     .map((item) => {
// //       const product = item.product_name;
// //       const provider = item.provider_name;
// //       const values = years.map((year) => Number(item[year] || 0));
// //       return {
// //         label: `${product} (${provider})`,
// //         data: values,
// //         backgroundColor: `rgba(${Math.random() * 255}, ${
// //           Math.random() * 255
// //         }, ${Math.random() * 255}, 0.6)`, // Random colors for better visualization
// //         borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
// //           Math.random() * 255
// //         }, 1)`,
// //         borderWidth: 1,
// //       };
// //     });

// //   return { years, datasets };
// // };

// const PaymentTrendsChart = ({ benchmarks, exchange_rates }) => {
//   const rawData = transformData(benchmarks, exchange_rates);

//   //   const { years, datasets } = processData(rawData);

//   //   const data = {
//   //     labels: years,
//   //     datasets,
//   //   };

//   //   const options = {
//   //     responsive: true,
//   //     plugins: {
//   //       legend: {
//   //         position: "top",
//   //       },
//   //       title: {
//   //         display: true,
//   //         text: "Payment Trends by Product",
//   //       },
//   //     },
//   //   };
//   const years = ["2021", "2022", "2023", "2024"];
//   const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];
//   const [selectedProvider, setSelectedProvider] = useState("All");

//   const filteredData =
//     selectedProvider === "All"
//       ? rawData
//       : rawData.filter((item) => item.provider_name === selectedProvider);

//   const providers = [
//     "All",
//     ...new Set(rawData.map((item) => item.provider_name)),
//   ];

//   return (
//     // <div className="p-4 bg-white shadow rounded-lg">
//     //   <Bar data={data} options={options} />
//     // </div>
//     <div className="w-full p-4">
//       <h2 className="text-2xl font-bold mb-4">Product Payment Trends</h2>
//       <div className="flex items-center mb-4">
//         <span className="mr-2">Provider:</span>
//         <select
//           onChange={(e) => setSelectedProvider(e.target.value)}
//           defaultValue={selectedProvider}
//           className="border rounded p-2"
//         >
//           {providers.map((provider) => (
//             <option key={provider} value={provider}>
//               {provider}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div style={{ width: "100%", height: "600px" }}>
//         <ResponsiveContainer>
//           <BarChart
//             data={filteredData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="product_name" />
//             <YAxis />
//             <Tooltip
//               formatter={(value, name, props) => [` ${value}`, `Year ${name}`]}
//               labelFormatter={(label) => `Product: ${label}`}
//             />
//             <Legend />
//             {years.map((year, index) => (
//               <Bar key={year} dataKey={year} fill={colors[index]} name={year} />
//             ))}
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default PaymentTrendsChart;

"use client";
import React, { useState } from "react";

import { convertToEuros } from "@/app/lib/utils";

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

// const transformData = (data, exchange_rates) => {
//   const transformedData = {};

//   data.forEach((item) => {
//     const { product_name, provider_name, currency, payment, start_date } = item;

//     const year = new Date(start_date).getFullYear();
//     if (!transformedData[product_name]) {
//       transformedData[product_name] = {
//         product_name,
//         provider_name,
//       };
//     }
//     let convertedPayment = convertToEuros(
//       payment,
//       currency.id,
//       year,
//       exchange_rates
//     );
//     transformedData[product_name][year] = convertedPayment.toFixed(2);
//   });

//   return Object.values(transformedData);
// };
// let newdata = {
//   product_benchmarks: [
//     {
//       id: 1,
//       provider_name: "Globex Brokers",
//       product_name: "Global Indexes",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 250300,
//       benchmark: 300000,
//     },
//     {
//       id: 2,
//       provider_name: "Globex Brokers",
//       product_name: "Global Indexes",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 270324,
//       benchmark: 324000,
//     },
//     {
//       id: 3,
//       provider_name: "Globex Brokers",
//       product_name: "Global Indexes",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 291950,
//       benchmark: 349920,
//     },
//     {
//       id: 4,
//       provider_name: "Globex Brokers",
//       product_name: "DataTrendz",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 190000,
//       benchmark: 120000,
//     },
//     {
//       id: 5,
//       provider_name: "Globex Brokers",
//       product_name: "DataTrendz",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 205200,
//       benchmark: 129600,
//     },
//     {
//       id: 6,
//       provider_name: "Globex Brokers",
//       product_name: "DataTrendz",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 221616,
//       benchmark: 139968,
//     },
//     {
//       id: 7,
//       provider_name: "Globex Brokers",
//       product_name: "TradeInsight",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 20000,
//       benchmark: 40000,
//     },
//     {
//       id: 8,
//       provider_name: "Globex Brokers",
//       product_name: "TradeInsight",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 54000,
//       benchmark: 43200,
//     },
//     {
//       id: 9,
//       provider_name: "Globex Brokers",
//       product_name: "EconoMetrics",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 100000,
//       benchmark: 78650,
//     },
//     {
//       id: 10,
//       provider_name: "Globex Brokers",
//       product_name: "EconoMetrics",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 68900,
//       benchmark: 78650,
//     },
//     {
//       id: 11,
//       provider_name: "Globex Brokers",
//       product_name: "EconoMetrics",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 93000,
//       benchmark: 86515,
//     },
//     {
//       id: 12,
//       provider_name: "Tyrell Insights",
//       product_name: "QuantiFlow",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 230000,
//       benchmark: 1234556,
//     },
//     {
//       id: 13,
//       provider_name: "Tyrell Insights",
//       product_name: "QuantiFlow",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 248400,
//       benchmark: 1333320,
//     },
//     {
//       id: 14,
//       provider_name: "Tyrell Insights",
//       product_name: "QuantiFlow",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 268272,
//       benchmark: 1439986,
//     },
//     {
//       id: 15,
//       provider_name: "Tyrell Insights",
//       product_name: "PriceGrid",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 123400,
//       benchmark: 220000,
//     },
//     {
//       id: 16,
//       provider_name: "Tyrell Insights",
//       product_name: "PriceGrid",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 133272,
//       benchmark: 237600,
//     },
//     {
//       id: 17,
//       provider_name: "Tyrell Insights",
//       product_name: "StockSage",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 90000,
//       benchmark: 100000,
//     },
//     {
//       id: 18,
//       provider_name: "Tyrell Insights",
//       product_name: "StockSage",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 97200,
//       benchmark: 108000,
//     },
//     {
//       id: 19,
//       provider_name: "Tyrell Insights",
//       product_name: "StockSage",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 120000,
//       benchmark: 116640,
//     },
//     {
//       id: 20,
//       provider_name: "Tyrell Insights",
//       product_name: "MarketLytics",
//       start_date: "2021-01-01",
//       end_date: "2021-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 200000,
//       benchmark: 220000,
//     },
//     {
//       id: 21,
//       provider_name: "Tyrell Insights",
//       product_name: "MarketLytics",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 216000,
//       benchmark: 237600,
//     },
//     {
//       id: 22,
//       provider_name: "Tyrell Insights",
//       product_name: "MarketLytics",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 233280,
//       benchmark: 256608,
//     },
//     {
//       id: 23,
//       provider_name: "Tyrell Insights",
//       product_name: "MarketLytics",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 251942,
//       benchmark: 277137,
//     },
//     {
//       id: 24,
//       provider_name: "Tyrell Insights",
//       product_name: "PriceIQ",
//       start_date: "2021-01-01",
//       end_date: "2021-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 10000,
//       benchmark: 7000,
//     },
//     {
//       id: 25,
//       provider_name: "Tyrell Insights",
//       product_name: "PriceIQ",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 10800,
//       benchmark: 7560,
//     },
//     {
//       id: 26,
//       provider_name: "Tyrell Insights",
//       product_name: "PriceIQ",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 11664,
//       benchmark: 8165,
//     },
//     {
//       id: 27,
//       provider_name: "Tyrell Insights",
//       product_name: "PriceIQ",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 9700,
//       benchmark: 8818,
//     },
//     {
//       id: 28,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "AlphaData",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 150000,
//       benchmark: 200000,
//     },
//     {
//       id: 29,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "AlphaData",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 147000,
//       benchmark: 200000,
//     },
//     {
//       id: 30,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "AlphaData",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 190000,
//       benchmark: 220000,
//     },
//     {
//       id: 31,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "FinScope",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 22000,
//       benchmark: 20000,
//     },
//     {
//       id: 32,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "FinScope",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 23760,
//       benchmark: 22000,
//     },
//     {
//       id: 33,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "FinScope",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 25661,
//       benchmark: 24200,
//     },
//     {
//       id: 34,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "EconoVision",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 100000,
//       benchmark: 100000,
//     },
//     {
//       id: 35,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "EconoVision",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 100500,
//       benchmark: 101000,
//     },
//     {
//       id: 36,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "EconoVision",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 101003,
//       benchmark: 102010,
//     },
//     {
//       id: 37,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "TradeWire",
//       start_date: "2021-01-01",
//       end_date: "2021-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 15000,
//       benchmark: 25000,
//     },
//     {
//       id: 38,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "TradeWire",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 20000,
//       benchmark: 25500,
//     },
//     {
//       id: 39,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "TradeWire",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 15000,
//       benchmark: 28000,
//     },
//     {
//       id: 40,
//       provider_name: "Skynet Market Solutions Alpha",
//       product_name: "TradeWire",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 22000,
//       benchmark: 28000,
//     },
//     {
//       id: 41,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "DataSpectrum",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 45632,
//       benchmark: 50000,
//     },
//     {
//       id: 42,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "DataSpectrum",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 1,
//         name: "USD",
//         symbol: "$",
//       },
//       payment: 55690,
//       benchmark: 65000,
//     },
//     {
//       id: 43,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "MarketSphere",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 123123,
//       benchmark: 125000,
//     },
//     {
//       id: 44,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "MarketSphere",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 132973,
//       benchmark: 135000,
//     },
//     {
//       id: 45,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "MarketSphere",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 143611,
//       benchmark: 145800,
//     },
//     {
//       id: 46,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "PriceWave",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 22000,
//       benchmark: 20000,
//     },
//     {
//       id: 47,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "PriceWave",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 27000,
//       benchmark: 34000,
//     },
//     {
//       id: 48,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "PriceWave",
//       start_date: "2024-01-01",
//       end_date: "2024-12-31",
//       currency: {
//         id: 2,
//         name: "GBP",
//         symbol: "£",
//       },
//       payment: 38000,
//       benchmark: 35000,
//     },
//     {
//       id: 49,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "DataVista",
//       start_date: "2022-01-01",
//       end_date: "2022-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 45000,
//       benchmark: 20000,
//     },
//     {
//       id: 50,
//       provider_name: "Gringotts Research Gold Index",
//       product_name: "DataVista",
//       start_date: "2023-01-01",
//       end_date: "2023-12-31",
//       currency: {
//         id: 3,
//         name: "EUR",
//         symbol: "€",
//       },
//       payment: 45000,
//       benchmark: 23000,
//     },
//   ],
// };

const transformData = (data, exchange_rates) => {
  const productCounts = {};
  const transformedData = {};

  // First pass: count occurrences of each product
  data.forEach((item) => {
    const { product_name } = item;
    productCounts[product_name] = (productCounts[product_name] || 0) + 1;
  });

  // Second pass: transform data for products appearing more than once
  data.forEach((item) => {
    const { product_name, provider_name, currency, payment, start_date } = item;
    const year = new Date(start_date).getFullYear();

    if (productCounts[product_name] > 1) {
      if (!transformedData[product_name]) {
        transformedData[product_name] = {
          product_name,
          provider_name,
        };
      }

      let convertedPayment = convertToEuros(
        payment,
        currency.id,
        year,
        exchange_rates
      );
      transformedData[product_name][year] = convertedPayment.toFixed(2);
    }
  });

  return Object.values(transformedData);
};

// const processData = (data) => {
//   const years = Array.from(
//     new Set(
//       data.flatMap((item) =>
//         Object.keys(item).filter(
//           (key) => key !== "product_name" && key !== "provider_name"
//         )
//       )
//     )
//   );
//   const datasets = data
//     .filter((item) => Object.keys(item).length > 2) // More than one year of payments
//     .map((item) => {
//       const product = item.product_name;
//       const provider = item.provider_name;
//       const values = years.map((year) => Number(item[year] || 0));
//       return {
//         label: `${product} (${provider})`,
//         data: values,
//         backgroundColor: `rgba(${Math.random() * 255}, ${
//           Math.random() * 255
//         }, ${Math.random() * 255}, 0.6)`, // Random colors for better visualization
//         borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
//           Math.random() * 255
//         }, 1)`,
//         borderWidth: 1,
//       };
//     });

//   return { years, datasets };
// };

const PaymentTrendsChart = ({ benchmarks, exchange_rates }) => {
  const rawData = transformData(benchmarks, exchange_rates);

  //   const { years, datasets } = processData(rawData);

  //   const data = {
  //     labels: years,
  //     datasets,
  //   };

  //   const options = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //       title: {
  //         display: true,
  //         text: "Payment Trends by Product",
  //       },
  //     },
  //   };
  const years = ["2021", "2022", "2023", "2024"];
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];
  const [selectedProvider, setSelectedProvider] = useState("All");

  const filteredData =
    selectedProvider === "All"
      ? rawData
      : rawData.filter((item) => item.provider_name === selectedProvider);

  const providers = [
    "All",
    ...new Set(rawData.map((item) => item.provider_name)),
  ];

  return (
    <div className="w-full p-4 shadow-lg border rounded-md">
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Product Payment Trends</h2>
        <div className="flex items-center space-x-2">
          <span>Provider:</span>
          <select
            className="border rounded px-2 py-1"
            value={selectedProvider}
            onChange={(e) => setSelectedProvider(e.target.value)}
          >
            {providers.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="w-full" style={{ height: 600 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={30} // Adjust bar size to fit better
            barCategoryGap="10%" // Adds spacing between bars
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_name" />
            <YAxis domain={["auto", "auto"]} /> {/* Auto-scaling Y-axis */}
            <Tooltip
              formatter={(value, name, props) => [`${value}`, `Year ${name}`]}
              labelFormatter={(label) => `Product: ${label}`}
            />
            <Legend />
            {years.map((year, index) => (
              <Bar key={year} dataKey={year} fill={colors[index]} name={year} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentTrendsChart;
