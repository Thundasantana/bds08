import { AllStore } from './types';

export const buildAllStoreChart = (sales: AllStore[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.id);

  return {
    labels,
    series
  };
};
