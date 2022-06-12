import React, {useEffect} from "react";
import Card from "../Card/Card";

export interface IDropdownProps {
    text?: string,
    options: string[]
}

const Dropdown: React.FunctionComponent<IDropdownProps> = (props) => {
    const {text, options} = props;
    useEffect(() => {

    }, []);
    return (
        <div className="inline-block relative w-64">
            <select
                className="card-mark px-4 py-2 pr-8 leading-tight w-full appearance-none text-slate-700">
                {options?.map(el =>
                    <option>{el}</option>
                )}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
        </div>
    )
}

export default Dropdown;
