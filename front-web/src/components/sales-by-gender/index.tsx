import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, buildPieChartConfig, sumSalesByGender } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { ChartSeriesData, FilterGender, SalesByGender } from '../../types';
import { formatPrice } from '../../utils/formatters';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  filterGender?: FilterGender;
};

function SalesByGenderComponent({ filterGender, labels = [], name, series = [] }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest.get<SalesByGender[]>('/sales/by-gender?storeId=0').then((response) => {
      const newChartSeries = buildChartSeries(response.data);
      setChartSeries(newChartSeries);
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, []);

  return (
    <div className="pie-chart-card base-card">
      <div className="sales-by-gender-quantity-container">
        <h2 className="sales-by-gender-quantity">{formatPrice(totalSum)}</h2>
        <span className="sales-by-gender-quantity-label">Total de vendas</span>
      </div>
      <div className="sales-by-gender-container">
        {filterGender?.gender?.[0]}
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="300"
          height="300"
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesByGenderComponent;
