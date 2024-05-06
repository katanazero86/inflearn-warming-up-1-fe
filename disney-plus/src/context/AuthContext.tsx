import {createContext, Dispatch, ReactNode, useState} from "react";

type AuthContextType = {
    token: string,
    setToken: Dispatch<string> | null,
}
export const AuthContext = createContext<AuthContextType>({
    token: '',
    setToken: null
});

export const AuthContextProvider = ({children} : {children: ReactNode}) => {
    const [token, setToken] = useState('');

    return (
        <AuthContext.Provider value={{
            token,
            setToken
        }}>
            {children}
        </AuthContext.Provider>
    )
};