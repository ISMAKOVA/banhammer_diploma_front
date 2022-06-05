import {MessageTypes} from "../utils/enums";
import React from "react";
export interface IAddPageProps {
    type?: MessageTypes
}

const AddPage: React.FunctionComponent<IAddPageProps> = (props) => {
    const {type} = props;

    const getTitle = (type: MessageTypes | undefined) => {
        if (!type) return;
        switch (type) {
            case MessageTypes.comment:
                return "комментария";
            case MessageTypes.post:
                return "поста";
            case MessageTypes.picture:
                return "картинки";
        }
    }
    const topics = [
        {
            id: 1,
            topic: "Person",
            topicRussian: "Индивид"
        },
        {
            id: 2,
            topic: "Group",
            topicRussian: "Группа"
        },
        {
            id: 3,
            topic: "Sex",
            topicRussian: "Отношения полов"
        },

    ]
    return (
        <div>
            <h1 className="text-2xl pb-10 ml-4 font-semibold">Изменение {getTitle(type)} 6</h1>
            <div className="flex flex-col">
                <div className="text-xl ml-3 mb-2">Текст</div>
                  <textarea
                      className="w-1/2 rounded-3xl bg-my-white opacity-90 text-sm px-6 py-2 resize-none hover:resize"
                      placeholder="Текст"
                  >
                  </textarea>
                <div className="my-3 xl:w-96">
                    <div className="text-xl ml-3 mb-2">Дата публикации</div>
                    <input type="date" id="publication_data"
                           className="form-control block w-full rounded-3xl px-3 py-2 text-base font-normal bg-my-white opacity-90 bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           placeholder="Дата публикации"/>
                </div>
                <div>
                    <div className="text-xl ml-3 mb-2">Темы</div>
                    {
                        topics.map(t =>
                            <div className="form-check">
                                <input
                                    key={t.id}
                                    className="form-check-input appearance-none rounded h-4 w-4 border
                                                border-gray-300 bg-white checked:bg-my-purple
                                                focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat
                                                bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    id={t.topic}
                                />
                                <label className="form-check-label inline-block text-base" htmlFor={t.topic}>
                                    {t.topicRussian}
                                </label>
                            </div>
                        )
                    }
                </div>


            </div>

            <div className="flex flex-row justify-end space-x-6 pt-6 ">
                <button
                    className={"bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"}>Сохранить изменения
                </button>
                <button
                    className={"bg-my-white opacity-60 hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4"}>Удалить пост
                </button>

            </div>
        </div>
    )
}

export default AddPage;
