import React, { Children, createContext, useEffect, useState } from 'react';
import app from'../fireBase/fire.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from'firebase/auth'




 export const AuthContex=createContext()
 //const auth=getAuth(app)
 const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState('')

    // set login funtion
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google login 
    const providerLogin = (provider) => {
        setLoading(true)
        
        return signInWithPopup(auth, provider);
    }

    // git hub login

    const gitProvider=(gitprovider)=>{
        setLoading(true)
        return signInWithPopup(auth,gitprovider)


    }
    // get user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user', currentUser);

           
                setUsers(currentUser);
            
            
                setLoading(false);
        });
        return () => {
            unsubscribe();
        }

    }, [])
    
    //LOG OUT
    const logout=()=>{
        return signOut(auth)
    }











   
     // create user
     const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    
    const dataInfo={users,logIn,providerLogin,createUser,logout,gitProvider}
    return (
        <AuthContex.Provider value={dataInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;