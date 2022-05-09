import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IViewPageProps {

}

const ViewPage: React.FunctionComponent<IViewPageProps> = (props) => {
    useEffect(() => {

    }, []);
    return (
        <div>
           <p>View Page 2</p>
        </div>
    )
}

export default ViewPage;
