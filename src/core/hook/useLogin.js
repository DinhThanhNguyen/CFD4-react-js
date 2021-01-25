import React, { useContext, useState } from "react";


const Context = React.createContext({});

let saveLogin = null
try{
    saveLogin = JSON.parse(localStorage.getItem('login'))
}catch(err){

}

export default function AuthProvider({ children }) {
    let [login, setLogin] = useState(saveLogin);

    function activeLogin(data) {
        if(data){
            localStorage.setItem('login',JSON.stringify(data))
            setLogin(data)
        }
    }
    return <Context.Provider value={{ login, activeLogin }}>{ children }</Context.Provider>
}

export function useLogin() {
    return useContext(Context)
}