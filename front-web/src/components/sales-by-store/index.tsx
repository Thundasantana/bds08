import './styles.css';
import { useEffect, useState } from 'react';
import { ChartSeriesData, PieChartConfig, SalesByGender, SalesByGender2 } from '../../types';
import { makeRequest } from '../../utils/request';
import { buildSalesByGenderChart } from '../../helpers';
import PieChartCard from '../pie-chart-card';
import { formatPrice } from '../../utils/formatters';
import { buildChartSeries, sumSalesByGender } from './helpers';

type Props = {
  filterAllStore?: number;
};

function SalesByAllStore({ filterAllStore }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  const [salesByGender2, setSalesByGender2] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>(`/sales/by-gender?storeId=${filterAllStore}`)
      .then((response) => {
        const newChartSeries = buildChartSeries(response.data);
        setChartSeries(newChartSeries);
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      });
  }, [filterAllStore]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender2[]>(`/sales/by-gender?storeId=${filterAllStore}`)
      .then((response) => {
        const newSalesByGender2 = buildSalesByGenderChart(response.data);
        setSalesByGender2(newSalesByGender2);
      });
  }, [filterAllStore]);

  return (
    <div className="sales-by-store-container">
      <div className="sales-by-store-data">
        <h1>{formatPrice(totalSum)}</h1>
        <span>Total de vendas</span>
      </div>
      <div className="pie-chart-card">
        <PieChartCard name="" labels={salesByGender2?.labels} series={salesByGender2?.series} />
      </div>
    </div>
  );
}
export default SalesByAllStore;
