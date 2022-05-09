import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/app-router";
import Layout from "./components/Layout";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./services/firebase";

initializeApp(firebaseConfig);

const App: React.FC = (props) => {
    return(
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
