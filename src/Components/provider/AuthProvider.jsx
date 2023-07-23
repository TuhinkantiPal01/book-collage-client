/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    console.log(user);

    const createUser = (email , password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth ,email, password);
    }

    const logIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth ,email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        });
        return () => unsubscribe;
      }, []);

    const AuthInfo = {
        createUser,
        logIn,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;