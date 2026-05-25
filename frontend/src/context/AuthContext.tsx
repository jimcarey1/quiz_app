import React from "react";

import { populateAccessToken, populateAuthUser } from "../utils/cookies";

const AuthContext = React.createContext(null)

export default function AuthProvider({children}: {children:React.ReactNode}){
    const [user, setUser] = React.useState<string|null>(populateAccessToken())
    const [accessToken, setAccessToken] = React.useState<string|null>(populateAuthUser())

    async function logout(){
        await cookieStore.delete('auth_user')
        await cookieStore.delete('access_token')
    }

    const isAuthenticated = (accessToken !== null)

    return(
        <AuthContext.Provider value={{accessToken, user, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = React.useContext(AuthContext)
    if(context === undefined){
        throw Error('You should wrap your react component inside your AuthContext')
    }
    return context
}