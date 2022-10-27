import React, { Children, createContext, useEffect, useState } from 'react';
import app from'../fireBase/firebase.init'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from'firebase/auth'




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
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // get user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           

           
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
    
    
    const dataInfo={users,logIn,providerLogin,createUser,logout,gitProvider,updateUserProfile}
    return (
        <AuthContex.Provider value={dataInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;