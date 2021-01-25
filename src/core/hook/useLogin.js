import React, { useContext } from "react";


const Context = React.createContext({});

export default function AuthProvider({ children }) {
    let login = null
    return <Context.Provider value={{ login }}>{ children }</Context.Provider>
}

export function useLogin() {
    return useContext(Context)
}