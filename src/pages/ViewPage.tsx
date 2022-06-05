import React, { useEffect, useState } from 'react';
import Table from "../components/shared/Table";
import {MessageTypes} from "../utils/enums";
import {FileExport} from '@styled-icons/boxicons-solid/FileExport';
import {donutChartData} from "../utils/mock_data/chart_data";
import DonutChart from "../components/shared/DonutChart";


export interface IViewPageProps {
    type?: MessageTypes
}

const ViewPage: React.FunctionComponent<IViewPageProps> = (props) => {
    const {type} = props;
    const [show, setShow] = useState(false);

    const getTitle = (type: MessageTypes | undefined) => {
        if (!type) return;
        switch (type) {
            case MessageTypes.comment:
                return "комментариев";
            case MessageTypes.post:
                return "постов";
            case MessageTypes.picture:
                return "картинок";
        }
    }

    const [dataDonut, setDataDonut] = useState({
        labels: ["Содержит выбросы", "Не содержит выбросы"],
        datasets: [{
            label: "Размеченные посты",
            data: [5, 95],
            backgroundColor: [
                'rgba(108, 99,  255, 0.7)',
                'rgba(248, 164, 216, 0.7)',
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

    return (
        <div>
            <h1 className="text-2xl pb-10 ml-4 font-semibold">Таблица {getTitle(type)}</h1>
            <div className="flex flex-row justify-end space-x-6 pb-6 ">
                <button
                    className={"bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"}>
                    <FileExport size={20}/> Экспорт
                </button>
            </div>
            <Table/>
            <div className="flex flex-row justify-end space-x-6 pt-6 ">
                <button
                    onClick={e => setShow(true)}
                    className={"card-mark hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 "}>Проверить качество данных
                </button>
                <button className={"hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 bg-my-purple text-my-white"}>Повысить качество данных</button>
            </div>
            {show?
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="card-mark p-6 min-w-[380px] py-9">
                        <div className="flex flex-row space-x-3">
                            <div className="block flex-grow ">
                                <div className="w-[180px] h-[180px] flex justify-center items-center glass-circle
                         font-semibold text-6xl">
                                    <p>80%</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-4xl pb-2 pt-3">Взаимная достоверность</div>
                                <p className="text-sm opacity-80">Характеристика способности двух или более специалистов, выполняющих измерения одним и тем же методом, получать одинаковые результаты в одинаковых задачах</p>
                            </div>
                        </div>
                    </div>
                <div className="card-mark p-6 flex flex-col">
                    <div className="text-xl pb-2 pt-3 text-center">Процент выбросов</div>
                    <div>
                        <DonutChart chartData={dataDonut} options={optionsDonut}/>
                    </div>
                </div>
                </div>
                : null
            }

        </div>
    )
}

export default ViewPage;
