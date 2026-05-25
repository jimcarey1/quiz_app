import React from 'react'
import { Button } from 'react-aria-components'

import { useAuth } from '../context/AuthContext'

export default function HomePage(){
    const {user, isAuthenticated} = useAuth()
    console.log(user, isAuthenticated)
    function authHandler(){
        window.location.href = 'http://localhost:8000/accounts/google/start'
    }
    return(
        <main className=''>
            {!isAuthenticated &&
                <Button className='p-2 cursor-pointer' onPress={authHandler}>
                    Continue with google
                </Button>
            }
        </main>
    )
}