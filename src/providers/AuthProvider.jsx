import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import auth from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true)
//   createUser start 
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    // signIn user start 
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign Out start 
    const LogOut = () =>{
        setLoading(true);
       return signOut(auth)

    }
    // authStateChange start 
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log(' Observed your email and password ok ',currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])





    const authInfo= {
        user,
        createUser,
        signInUser,
        LogOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}