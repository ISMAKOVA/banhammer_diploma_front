import * as React from 'react';

export interface ICard {
    type: 'comment' | 'picture' | 'post'
    title: string
    picture?: string
    onclick?: void
}

const Card: React.FC<ICard> = (props) => {
    const {picture, title} = props;

    const createRadioButton = (id: string, label: string, name: string, checked = false, disabled = false) => {
        return <div className="form-check">
            <input
                disabled={disabled}
                checked={checked}
                className="form-check-input appearance-none rounded-full h-4 w-4 border
                                                border-gray-300 bg-white checked:bg-blue-700 checked:border-blue-700
                                                focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat
                                                bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio" name={name} id={id}/>
            <label className="form-check-label inline-block text-slate-700"
                   htmlFor={id}>
                {label}
            </label>
        </div>
    }

    return (
        <div className="card w-80 h-[32rem] p-6 space-y-4 card-mark m-4">
            <img className="w-full h-64 rounded-md transition hover:bg-cyan-300"
                 src={picture}
                 alt=""/>
            <div id="description" className="space-y-4">
                <h2 className="text-slate-600 font-semibold text-xl transition hover:text-cyan-300">
                    {title}
                </h2>
                <div className="flex flex-col text-base space-y-2.5">
                    {createRadioButton("0", "Токсично", "radio1", true)}
                    {createRadioButton("1", "Нетоксично", "radio1", false)}

                    {createRadioButton("0", "Токсичный для личности", "radio2", true)}
                    {createRadioButton("1", "Нетоксичный для личности", "radio2", false)}
                </div>
            </div>
        </div>
    )
}
export default Card;
