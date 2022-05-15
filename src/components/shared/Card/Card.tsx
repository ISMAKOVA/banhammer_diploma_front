import * as React from 'react';
import Radiobutton from "../Radiobutton";
import {MessageTypes} from "../../../utils/enums";

export interface ICard {
    type?: MessageTypes
    title?: string
    picture?: string
    onclick?: void
    text?: string
}

const Card: React.FC<ICard> = (props) => {
    const {type, picture, title, text} = props;
    const is_toxic_sexist = "is_toxic_sexist";
    const is_toxic_to_group = "is_toxic_to_group";
    const marks = [
        {
            group: "is_toxic",
            label: "Токсично",
            value: 1,
        },
        {
            group: "is_toxic",
            label: "Нетоксично",
            value: 0,
        },
        {
            group: "is_toxic_sexist",
            value: 1,
            label: "Токсично (пол)",
        },
        {
            group: "is_toxic_sexist",
            value: 0,
            label: "Нетоксично (пол)",
        },
        {
            group: "is_toxic_to_person",
            value: 1,
            label: "Токсично (личность)",
        },
        {
            group: "is_toxic_to_person",
            value: 0,
            label: "Нетоксично (личность)",
        },
        {
            group: "is_toxic_to_group",
            value: 1,
            label: "Токсично (группа)",
        },
        {
            group: "is_toxic_to_group",
            value: 0,
            label: "Нетоксично (группа)",
        },
        {
            group: "coloring",
            value: -1,
            label: "Негативно",
        },
        {
            group: "coloring",
            value: 1,
            label: "Позитивно",
        },
        {
            group: "coloring",
            value: 0,
            label: "Нейтрально",
        },
    ]

    const getTitle = (type: MessageTypes | undefined) => {
        if (!type) return;
        switch (type) {
            case MessageTypes.comment:
                return "следующему комментарию";
            case MessageTypes.post:
                return "следующему посту";
            case MessageTypes.picture:
                return "следующей картинке";
        }
    }

    return (
        <div className={"card h-auto p-6 space-y-4 card-mark m-4 " + (type === MessageTypes.post ? "w-[50rem]" : "w-80")}>
            <h2 className="text-slate-700 font-semibold text-xl transition hover:text-cyan-300">
                Поставте отметку {getTitle(type)}
            </h2>
            <div className={"flex " + (type === MessageTypes.post ? "flex-row space-x-4" : "flex-col space-y-4")}>
                {type !== MessageTypes.comment ?
                    <img className="h-auto max-h-80 rounded-md transition"
                         src={picture}
                         alt=""/>
                    : null
                }

                <div className="flex flex-col flex-nowrap space-y-2">
                    <p className="text-left text-base pb-2">
                        {type !== MessageTypes.picture ? text : null}
                    </p>
                    <div className="text-base">
                        {
                            marks.filter(mark => mark.group !== is_toxic_to_group && mark.group !== is_toxic_sexist)
                                .map((mark, i) =>
                                    <Radiobutton id={i.toString()} label={mark.label} name={mark.group}/>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
