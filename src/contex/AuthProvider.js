import React, { Children, createContext, useState } from 'react';
import app from'../fireBase/fire.config'
import {getAuth, signInWithEmailAndPassword, signInWithPopup} from'firebase/auth'




 export const AuthContex=createContext()
 //const auth=getAuth(app)
 const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    // set login funtion
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const providerLogin = (provider) => {
        
        return signInWithPopup(auth, provider);
    }
    
    
    const dataInfo={user,logIn,providerLogin}
    return (
        <AuthContex.Provider value={dataInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;