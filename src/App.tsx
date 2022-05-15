import React, {useEffect, useState} from 'react';
import {BrowserRouter, useLocation, useNavigate, useRoutes} from "react-router-dom";
//import AppRouter from "./components/app-router";
import AppRouter from "./components/appRouter";
import Layout from "./components/layouts/Layout/Layout";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./services/firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";

initializeApp(firebaseConfig);

const App: React.FC = (props) => {

    return(
        <BrowserRouter>
            <Layout>
                <AppRouter />
                {/*<AppRouter />*/}
            </Layout>
        </BrowserRouter>
    );
};

export default App;
