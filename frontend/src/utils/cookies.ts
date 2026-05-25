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
    let authUser = getCookie('auth_user')
    if(authUser){
        authUser = authUser.replace("\\054", ",")
        return authUser
    }
    return null
}