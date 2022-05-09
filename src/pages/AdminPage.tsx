import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IAdminPageProps {

}

const AdminPage: React.FunctionComponent<IAdminPageProps> = (props) => {
    useEffect(() => {

    }, []);
    return (
        <div>
           <p>Admin Page</p>
        </div>
    )
}

export default AdminPage;
