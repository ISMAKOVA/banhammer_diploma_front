import React from "react";
import {Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ChartData,
    ArcElement
} from 'chart.js';

interface IDonutChart {
    chartData: ChartData<"doughnut", number[], unknown>
    options: any
}
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
);

const DonutChart: React.FC<IDonutChart> = (props) => {
    const {chartData, options} = props;
    return  <Doughnut options={options} data={chartData} />;
}
export default DonutChart;
