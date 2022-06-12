import React, {useContext, useEffect, useState} from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../utils/context/AuthContext";

const LoginPage: React.FunctionComponent<any> = (props) => {
    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
        if (user != null) {
            navigate("/main");
        }
        else{
            navigate("/login");
        }
    }, [user])

    return (
        <div className="flex justify-center items-center h-screen">
            <button className="bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"
                    onClick={handleGoogleSignIn}
                    >Войти с помощью Google</button>

            {/*<button className="bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"*/}
            {/*        onClick={signOut}*/}
            {/*        disabled={authing}>Выйти</button>*/}
        </div>
    )
}

export default LoginPage;
