import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import { getProductBenchmarks, getExchangeRates } from "@/app/lib/api";


jest.mock("@/components/ui/BenchmarkTable", () => {
  return function DummyBenchmarkTable() {
    return <div data-testid="benchmark-table">Benchmark Table</div>;
  };
});

jest.mock("@/components/ui/PaymentTrendChart", () => {
  return function DummyPaymentTrendChart() {
    return <div data-testid="payment-trend-chart">Payment Trend Chart</div>;
  };
});


jest.mock("@/app/lib/api", () => ({
  getProductBenchmarks: jest.fn(),
  getExchangeRates: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders BenchmarkTable and PaymentTrendChart when data is available', async () => {
    const mockBenchmarks = [{
        "id": 1,
        "provider_name": "Globex Brokers",
        "product_name": "Global Indexes",
        "start_date": "2022-01-01",
        "end_date": "2022-12-31",
        "currency": {
            "id": 2,
            "name": "GBP",
            "symbol": "£"
        },
        "payment": 250300,
        "benchmark": 300000
    },];
    const mockExchangeRates = [ {
        "from_currency_id": 1,
        "to_currency_id": 3,
        "year": 2021,
        "exchange_rate": 0.82
    },];

    getProductBenchmarks.mockResolvedValue({ product_benchmarks: mockBenchmarks });
    getExchangeRates.mockResolvedValue({ exchange_rates: mockExchangeRates });

      render(await Home());
     

    expect(screen.getByTestId('benchmark-table')).toBeInTheDocument();
      
    expect(screen.getByTestId('payment-trend-chart')).toBeInTheDocument();
  });

  it('renders error message when API calls fail', async () => {
    const errorMessage = 'API Error';
    getProductBenchmarks.mockRejectedValue(new Error(errorMessage));
    getExchangeRates.mockRejectedValue(new Error(errorMessage));
  
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
    render(await Home());
  
    expect(consoleSpy).toHaveBeenCalled();
    expect(screen.getByText(`Error fetching data: ${errorMessage}`)).toBeInTheDocument();
  
    consoleSpy.mockRestore();
  });

  it('renders no data message when API returns empty data', async () => {
    getProductBenchmarks.mockResolvedValue({ product_benchmarks: [] });
    getExchangeRates.mockResolvedValue({ exchange_rates: [] });

    render(await Home());

    expect(screen.getByText('No data available to display.')).toBeInTheDocument();
  });
});