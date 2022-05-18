import React from "react";
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartArea,
    ChartData,
} from 'chart.js';

interface IBarChart {
    chartData: ChartData<"bar", number[], unknown>
    options: any
}
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart: React.FC<IBarChart> = (props) => {
    const {chartData, options} = props;
    return  <Bar options={options} data={chartData} />;
}
export default BarChart;
