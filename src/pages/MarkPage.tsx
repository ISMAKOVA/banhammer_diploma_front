import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from "../components/shared/Card/Card";
import Dropdown from "../components/shared/Dropdown/Dropdown";

export interface IMarkPageProps {
    type?: "post" | "comment" | "picture"
}

const MarkPage: React.FunctionComponent<IMarkPageProps> = (props) => {
    const {type} = props;
    useEffect(() => {

    }, []);

    const getCards = () => {
        let content = [];
        for (let i = 0; i < 8; i++) {

            content.push("Mem");
        }
        return content;
    };
    const cards = getCards();
    return (
        <div className="flex flex-col">
            <div className="">
                <h1 className="text-2xl pb-10">Разметка {type}</h1>
                <div className="flex flex-row space-x-6 mb-6">
                    <div>
                        <h3 className="text-sm text-slate-600 pl-2.5 pb-1">Количество для показа</h3>
                        <Dropdown text="Количество для показа"/>
                    </div>

                    <div>
                        <h3 className="text-sm text-slate-600 pl-2.5 pb-1">Тема</h3>
                        <Dropdown text="Тема разметки"/>
                    </div>

                </div>
                <div className="flex flex-row flex-wrap">
                    {cards.map(c=> <Card type="picture" title={c} picture={"/images/bg-image-2.png"}/>)}
                </div>
            </div>

            <div className="flex flex-row justify-end space-x-6 pt-6">
                <button className="template-card px-4 py-2 ">Продолжить</button>
                <button className="template-card px-4 py-2">Завершить</button>
            </div>

            {/*<Card type="picture" title="Mem" picture={"/images/bg-image-2.png"}/>*/}
        </div>
    )
}

export default MarkPage;
