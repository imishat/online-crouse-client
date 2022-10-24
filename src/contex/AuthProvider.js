import React, { Children, createContext, useEffect, useState } from 'react';
import app from'../fireBase/fire.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from'firebase/auth'




 export const AuthContex=createContext()
 //const auth=getAuth(app)
 const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    // set login funtion
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google login 
    const providerLogin = (provider) => {
        
        return signInWithPopup(auth, provider);
    }
    // get user

    useEffect(()=>{
        const unsubcrib=onAuthStateChanged(auth,(currentUser)=>{
           // setUser(currentUser)
        })

       

       
        return()=>{
            unsubcrib()
        }
    },[])
     // create user
     const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    
    const dataInfo={user,logIn,providerLogin,createUser}
    return (
        <AuthContex.Provider value={dataInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;