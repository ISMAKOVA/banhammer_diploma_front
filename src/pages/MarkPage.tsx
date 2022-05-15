import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from "../components/shared/Dropdown/Dropdown";
import Card from "../components/shared/Card";
import {MessageTypes} from "../utils/enums";

export interface IMarkPageProps {
    type?: MessageTypes
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
                    {cards.map(c =>
                        <Card
                        title={type}
                        type={type}
                        picture={require("../assets/pic.png")}
                        text={"So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist."}
                        />
                    )}
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
