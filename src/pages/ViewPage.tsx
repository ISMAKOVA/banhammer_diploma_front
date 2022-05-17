import React, { useEffect, useState } from 'react';
import Table from "../components/shared/Table";
import {MessageTypes} from "../utils/enums";


export interface IViewPageProps {
    type?: MessageTypes
}

const ViewPage: React.FunctionComponent<IViewPageProps> = (props) => {
    const {type} = props;

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
        <div>
            <h1 className="text-2xl pb-10 ml-4 font-semibold">Таблица {getTitle(type)}</h1>
            <Table/>
        </div>
    )
}

export default ViewPage;
