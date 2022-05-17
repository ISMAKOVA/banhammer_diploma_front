import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {AuthContextProvider} from "./services/firebase";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        {/*<AuthContextProvider>*/}
            <App/>
        {/*</AuthContextProvider>*/}
    </React.StrictMode>
);

reportWebVitals();
