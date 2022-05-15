import React, { useEffect, useState } from 'react';


export interface IViewPageProps {
    type?: "post" | "comment" | "picture"
}

const ViewPage: React.FunctionComponent<IViewPageProps> = (props) => {
    const {type} = props;
    useEffect(() => {

    }, []);
    return (
        <div>
           <p>View Page {type}</p>
        </div>
    )
}

export default ViewPage;
