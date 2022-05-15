import React, {useEffect} from "react";

export interface IRadiobuttonProps {
    text?: string
}

const Radiobutton: React.FunctionComponent<IRadiobuttonProps> = (props) => {
    const {text} = props;
    useEffect(() => {

    }, []);
    return (
        <div className="inline-block relative w-64">

        </div>
    )
}

export default Radiobutton;
