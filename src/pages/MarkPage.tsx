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
    const [currentNumber, setCurrentNumber] = useState(0);
    const [currentTopic, setCurrentTopic] = useState("");
    const [cards, setCards] = useState<{ id: number; text: string; img: any; }[]>();
    const numberToShow = [3,6,12,18];
    const topic = ["Личность","Группа", "Пол"];
    useEffect(() => {

    }, []);

    const cardss = [
        {
            id: 0,
            text: "Илья, *душнила ON* это были не свиньи, а Труляля и Траляля - персонажи Алисы в стране чудес *душнила OFF*",
            img: require("../assets/mem1.png")
        },
        {
            id: 1,
            text: " Выйдет вторая часть. Также можно найти официальный трейлер этой игре. Несмотря на то, что компания " +
                "распалась, другая студия взялась за эту игру. Конечно там участвовали те, которые работали на первой части. ",
            img: require("../assets/mem2.png")
        },
        {
            id: 2,
            text: "Мне нравится этот стиль, похоже на скан какой-то манги из 80-90-хх годов. Историей прям таки веет.",
            img: require("../assets/mem3.png")
        },
        {
            id: 3,
            text: "давай будем друзьями, ну конечно ...давай\n" +
                "ты будешь меня кушать, я не буду возражать",
            img: require("../assets/mem4.png")
        },
        {
            id: 4,
            text: "Воу!\n" +
                "Волшебно!",
            img: require("../assets/mem5.png")
        },
        {
            id: 5,
            text: "София, о хоть кто-то ещё помнит the wolf among us",
            img: require("../assets/mem6.png")
        },
        {
            id: 6,
            text: "Тренды UX/UI дизайна в 2022 году.\n До сих пор остается популярным стиль glassmorphism, который был впервые широко представлен в 2013 году с релизом iOS 7...",
            img: require("../assets/pic.png")
        },
    ]

    const getTitle = (type: MessageTypes | undefined) => {
        if (!type) return;
        switch (type) {
            case MessageTypes.comment:
                return "комментариев - режим обучения";
            case MessageTypes.post:
                return "постов";
            case MessageTypes.picture:
                return "картинок";
        }
    }

    const handleFilters = () => {
        setCards( cardss?.slice(0, currentNumber));
        console.log("adfadf")
    }
    return (
        <div className="flex flex-col">
            <div className="">
                <h1 className="text-2xl pb-10 ml-4">Разметка {getTitle(type)}</h1>
                <div className="flex flex-row space-x-8 mb-6 ml-4">
                    <div>
                        <h3 className="text-sm text-slate-700 pl-2.5 pb-1">Количество для показа</h3>
                        <div className="inline-block relative w-64">
                            <select
                                onChange={e => setCurrentNumber(parseInt(e.target.value))}
                                className="card-mark px-4 py-2 pr-8 leading-tight w-full appearance-none text-slate-700">
                                <option value={0} key={0} defaultChecked> Количество для показа </option>
                                {numberToShow?.map(el =>
                                    <option value={el} key={el}>{el}</option>
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm text-slate-700 pl-2.5 pb-1">Тема</h3>
                        <div className="inline-block relative w-64">
                            <select
                                onChange={e => setCurrentTopic(e.target.value)}
                                className="card-mark px-4 py-2 pr-8 leading-tight w-full appearance-none text-slate-700">
                                <option value={0} key={0} defaultChecked> Тема </option>
                                {topic?.map(el =>
                                    <option value={el} key={el}>{el}</option>
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={"self-end"}>
                        <button
                            onClick={handleFilters}
                            className="bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"
                        >
                            Применить фильтры
                        </button>
                    </div>

                </div>
                <div className="flex flex-row flex-wrap">
                    {cards?.map(c =>
                        <Card
                            key={c.id}
                            title={type}
                            type={type}
                            picture={c.img}
                            text={c.text}
                            isCorrect={!!(c.id % 3)}
                        />
                    )}
                </div>
            </div>

            <div className="flex flex-row justify-end space-x-6 pt-6 ">
                {/*<button*/}
                {/*    className={"bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"}>Продолжить*/}
                {/*</button>*/}
                {/*<button className={"card-mark hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4"}>Завершить</button>*/}
                <button className={"bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"}>Повторить</button>
            </div>
        </div>
    )
}

export default MarkPage;
