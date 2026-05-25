import React from 'react'
import { Button } from 'react-aria-components'


export default function HomePage(){
    function authHandler(){
        window.location.href = 'http://localhost:8000/accounts/google/start'
    }
    return(
        <main className=''>
            <Button className='p-2 cursor-pointer' onPress={authHandler}>
                Continue with google
            </Button>
        </main>
    )
}