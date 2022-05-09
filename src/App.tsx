import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/app-router";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

export interface IAppProps {

}

const App: React.FC<IAppProps> = (props) => {
    return(
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
