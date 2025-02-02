import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};
function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div>
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="300"
        height="300"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
