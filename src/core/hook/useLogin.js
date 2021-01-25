import React, { useContext, useState } from "react";


const Context = React.createContext({});

export default function AuthProvider({ children }) {
    let [login, setLogin] = useState();


    function active(data) {
        setLogin(data)
    }
    return <Context.Provider value={{ login }}>{ children }</Context.Provider>
}

export function useLogin() {
    return useContext(Context)
}