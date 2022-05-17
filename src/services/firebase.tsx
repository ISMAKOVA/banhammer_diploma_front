import {initializeApp} from "firebase/app";
import React, {createContext, useEffect, useState} from "react";
import firebase from "firebase/app";
import {getAuth} from "firebase/auth";

export const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// export const auth = getAuth();
// export const AuthContext = createContext< | null>(null);
// interface IAuthContextProvider {
//     children?: React.ReactNode;
// }
// export const AuthContextProvider: React.FC<IAuthContextProvider> = ({ children }) => {
//     const [user, setUser] = useState<firebase.User | null>(null);
//
//     useEffect(() => {
//         return auth.onAuthStateChanged((firebaseUser) => {
//             setUser(firebaseUser);
//         });
//     }, []);
//
//     return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// }

