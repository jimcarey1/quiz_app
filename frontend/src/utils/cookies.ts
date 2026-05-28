import type { User } from "../types/user"

function getCookie(name: string):string|null{
    const cookies = document.cookie.split('; ')
    for (const cookie of cookies){
        const cookie_name = cookie.split('=', 1)[0]
        if(cookie_name === name){
            const value = cookie.slice(cookie_name.length+1)
            return value
        }
    }
    return null
}

export function populateAccessToken(){
    const accessToken = getCookie('access_token')
    return accessToken
}

export function populateAuthUser(){
    let authUserCookie = getCookie('auth_user')
    if(authUserCookie !== null){
        authUserCookie = authUserCookie.replaceAll("\\054", ",")
        const authUser: User = JSON.parse(JSON.parse(authUserCookie))
        return authUser
    }
    return null
}