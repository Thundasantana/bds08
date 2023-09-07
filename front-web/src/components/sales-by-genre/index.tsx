import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function SalesByGenre({ labels, name, series }: Props) {
  return (
    <div className="sales-by-date-container base-card">
      <div className="sales-by-date-quantity-container">
        <h2 className="sales-by-date-quantity">464.988,00</h2>
        <span className="sales-by-date-quantity-label">Total de vendas</span>
      </div>
      <div className="pie-chart-card">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesByGenre;
