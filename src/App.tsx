import React, {useEffect, useState} from 'react';
import {BrowserRouter, useLocation, useNavigate, useRoutes} from "react-router-dom";
//import AppRouter from "./components/app-router";
import AppRouter from "./components/appRouter";
import Layout from "./components/layouts/Layout/Layout";
import {AuthContextProvider} from "./utils/context/AuthContext";
const App: React.FC = (props) => {

    return(
        <AuthContextProvider>
        <BrowserRouter>
            <Layout>
                <AppRouter />
                {/*<AppRouter />*/}
            </Layout>
        </BrowserRouter>
        </AuthContextProvider>
    );
};

export default App;
