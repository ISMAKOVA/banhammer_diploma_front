import React, {useEffect, useState} from 'react';
import BarChart from "../components/shared/BarChart";
import {chartData, chartData2, chartData3, donutChartData} from "../utils/mock_data/chart_data";
import DonutChart from "../components/shared/DonutChart";


export interface IMainPageProps {

}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
    useEffect(() => {

    }, []);

    const [data, setData] = useState({
        labels: chartData.map((data) => data.date),
        datasets: [
            {
                label: "Комментарии",
                data: chartData.map(data => data.userMarks),
                backgroundColor: 'rgba(108, 99,  255, 0.7)',
            },
            {
                label: "Посты",
                data: chartData2.map(data => data.userMarks),
                backgroundColor: 'rgba(248, 164, 216, 0.7)',
            },
            {
                label: "Каритнки",
                data: chartData3.map(data => data.userMarks),
                backgroundColor: 'rgba(164, 216, 248, 0.7)',
            },
        ]
    });
    const [options, setOptions] = useState({
        labels: chartData.map((data) => data.date),
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                        family: "Open Sans"
                    },

                }
            },
        }
    });

    const [dataDonut, setDataDonut] = useState({
        labels: donutChartData.map((data) => data.type),
        datasets: [{
            label: "Размеченные сообющения",
            data: donutChartData.map(data => data.marks),
            backgroundColor: [
                'rgba(108, 99,  255, 0.7)',
                'rgba(248, 164, 216, 0.7)',
                'rgba(164, 216, 248, 0.7)'
            ],

        }]
    });
    const [optionsDonut, setOptionsDonut] = useState({
        labels: donutChartData.map((data) => data.type),
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                        family: "Open Sans"
                    }
                },
                position: "right",
            },
        }
    });

    let total = chartData.map(data => data.userMarks).reduce((partialSum, a) => partialSum + a, 0) +
        chartData2.map(data => data.userMarks).reduce((partialSum, a) => partialSum + a, 0) +
        chartData3.map(data => data.userMarks).reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div>
            <h1 className="text-2xl pb-10 ml-4 font-semibold">Главная</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="card-mark p-6 min-w-[380px] py-9">
                    <div className="flex flex-row space-x-3">
                        <div className="block flex-grow ">
                            <div className="w-[180px] h-[180px] flex justify-center items-center glass-circle
                         font-semibold text-6xl">
                                <p>{total}</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-4xl pb-2 pt-3">Сообщений</div>
                            <p className="text-base opacity-80">За последнюю неделю вы разметили на <span className="text-my-purple">30</span> сообщений больше, чем за
                                предыдущую</p>
                        </div>
                    </div>
                </div>
                <div className="card-mark p-6 flex flex-col">
                    <div className="text-xl pb-2 pt-3 text-center">Процент размеченных сообщений за неделю</div>
                    <div>
                        <DonutChart chartData={dataDonut} options={optionsDonut}/>
                    </div>
                </div>
                <div className="card-mark p-6 col-span-2">
                    <div className="text-xl pb-2 pt-3 text-center">Количество размеченных сообщений за неделю</div>
                    <div className="h-72">
                        <BarChart chartData={data} options={options}/>
                    </div>

                </div>
            </div>


        </div>
    )
}


export default MainPage;
