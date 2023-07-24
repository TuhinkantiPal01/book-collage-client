/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider =new GithubAuthProvider();

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

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider)
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , githubProvider)
    }

    const update = (name,imageUrl) => {
        return updateProfile(auth.currentUser,{
            displayName:name , photoURL:imageUrl
        })
    }

    const logOut = () => {
        return signOut(auth);
    }

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
        googleLogin,
        githubLogin,
        logOut,
        update,
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