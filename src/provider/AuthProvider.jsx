import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const googleProvider = new GoogleAuthProvider()

    const authInfo = {
        user,
        createUser,
        signIn,
        googleProvider,
        auth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;