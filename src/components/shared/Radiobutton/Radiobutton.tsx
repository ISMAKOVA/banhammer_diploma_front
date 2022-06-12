import React, {useEffect} from "react";

export interface IRadiobuttonProps {
    id?: string,
    name?: string,
    label?: string,
    disabled?: boolean,
    checked?: boolean,
    onChange?: (value: string) => void,
    isWrong?: boolean
}

const Radiobutton: React.FunctionComponent<IRadiobuttonProps> = (props) => {
    const {label, id, name, disabled, checked, onChange, isWrong} = props;
    useEffect(() => {

    }, []);
    return (
        <div className="form-check">
            <input
                // onChange={e => onChange(e.target.value)}
                disabled={disabled}
                checked={checked}
                className={"form-check-input appearance-none rounded-full h-4 w-4 border" +
                    "border-gray-300 bg-white checked:bg-my-purple " +
                    "focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat" +
                    "bg-center bg-contain float-left mr-2 cursor-pointer "}
                type="radio" id={id} name={name}/>
            <label className="form-check-label inline-block text-slate-700"
                   htmlFor={id}>
                {label}
            </label>
        </div>

    )
}

export default Radiobutton;
