export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterGender = {
  gender?: Gender;
};

export type SalesSummary = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type AllStore = {
  name: string;
  id: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
