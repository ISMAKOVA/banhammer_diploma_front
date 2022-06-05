import React, {useContext, createContext, useEffect, useState} from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {auth} from "../../services/firebase";

interface IAuthContextProvider {
    children?: React.ReactNode;
}

const AuthContext = createContext<any>({});

export const AuthContextProvider: React.FC <IAuthContextProvider>= ({children}) => {
  const [user, setUser] = useState<any>({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('User', user);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
      <AuthContext.Provider value={{googleSignIn, logOut, user}}>
        {children}
      </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}
