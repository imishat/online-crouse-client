import React, { Children, createContext, useState } from 'react';
//import app from'../fireBase/fire.config'
import {getAuth} from'firebase/auth'




 export const AuthContex=createContext()
 //const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    
    
    const dataInfo={user}
    return (
        <AuthContex.Provider value={dataInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;