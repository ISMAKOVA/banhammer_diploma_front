import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
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

    const cards = [
        // {
        //     id: 0,
        //     text: "Илья, *душнила ON* это были не свиньи, а Труляля и Траляля - персонажи Алисы в стране чудес *душнила OFF*",
        //     img: require("../assets/mem1.png")
        // },
        // {
        //     id: 1,
        //     text: " Выйдет вторая часть. Также можно найти официальный трейлер этой игре. Несмотря на то, что компания " +
        //         "распалась, другая студия взялась за эту игру. Конечно там участвовали те, которые работали на первой части. ",
        //     img: require("../assets/mem2.png")
        // },
        // {
        //     id: 2,
        //     text: "Мне нравится этот стиль, похоже на скан какой-то манги из 80-90-хх годов. Историей прям таки веет.",
        //     img: require("../assets/mem3.png")
        // },
        // {
        //     id: 3,
        //     text: "давай будем друзьями, ну конечно ...давай\n" +
        //         "ты будешь меня кушать, я не буду возражать",
        //     img: require("../assets/mem4.png")
        // },
        // {
        //     id: 4,
        //     text: "Воу!\n" +
        //         "Волшебно!",
        //     img: require("../assets/mem5.png")
        // },
        // {
        //     id: 5,
        //     text: "София, о хоть кто-то ещё помнит the wolf among us",
        //     img: require("../assets/mem6.png")
        // },
        {
            id: 6,
            text: "Тренды UX/UI дизайна в 2022 году.\n До сих пор остается популярным стиль glassmorphism, который был впервые широко представлен в 2013 году с релизом iOS 7...",
            img: require("../assets/pic.png")
        },
    ]

    // const getCards = () => {
    //     let content = [];
    //     for (let i = 0; i < 1; i++) {
    //
    //         content.push("Mem");
    //     }
    //     return content;
    // };
    // const cards = getCards();

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
    return (
        <div className="flex flex-col">
            <div className="">
                <h1 className="text-2xl pb-10 ml-4 font-semibold">Разметка {getTitle(type)}</h1>
                <div className="flex flex-row space-x-8 mb-6 ml-4">
                    <div>
                        <h3 className="text-sm text-slate-700 pl-2.5 pb-1">Количество для показа</h3>
                        <Dropdown text="Количество для показа"/>
                    </div>

                    <div>
                        <h3 className="text-sm text-slate-700 pl-2.5 pb-1">Тема</h3>
                        <Dropdown text="Тема разметки"/>
                    </div>
                    <div className={"self-end"}>
                        <button className={"bg-my-purple opacity-70 shadow-2xl rounded-2xl py-2 px-4 text-my-white"}
                                disabled>Применить фильтры
                        </button>
                    </div>

                </div>
                <div className="flex flex-row flex-wrap">
                    {cards.map(c =>
                        <Card
                            key={c.id}
                            title={type}
                            type={type}
                            picture={c.img}
                            text={c.text}
                        />
                    )}
                </div>
            </div>

            <div className="flex flex-row justify-end space-x-6 pt-6 ">
                <button
                    className={"bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"}>Продолжить
                </button>
                <button className={"card-mark hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4"}>Завершить</button>

            </div>
        </div>
    )
}

export default MarkPage;
