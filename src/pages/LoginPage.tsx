import React, {useContext, useEffect, useState} from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export interface ILoginPageProps {

}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            })
    }

    const signOut = async () => {
        auth.signOut();
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <button className="bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"
                    onClick={signInWithGoogle}
                    disabled={authing}>Войти с помощью Google</button>

            {/*<button className="bg-my-purple hover:opacity-80 shadow-2xl rounded-2xl py-2 px-4 text-my-white"*/}
            {/*        onClick={signOut}*/}
            {/*        disabled={authing}>Выйти</button>*/}
        </div>
    )
}

export default LoginPage;
