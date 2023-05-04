import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext({});

const auth = getAuth(app)
console.log(auth);

const AuthProvider = ({ children }) => {
    const user = {displayName: 'Rahi'};

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const authInfo = {
        user,
        createUser,
        signIn,
        googleProvider,
        githubProvider,
        auth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;