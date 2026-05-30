import { Button } from 'react-aria-components'

import { useAuth } from '../context/AuthContext'

export default function HomePage(){
    const {user, isAuthenticated} = useAuth()
    console.log(user, isAuthenticated)
    function authHandler(){
        window.location.href = 'http://localhost:8000/accounts/google/start'
    }
    return(
        <main className='flex min-h-screen items-center justify-center bg-white p-4 text-gray-900 dark:bg-black dark:text-white'>
            {!isAuthenticated &&
                <Button className='rounded-lg border border-green-600 bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700' onPress={authHandler}>
                    Continue with google
                </Button>
            }
        </main>
    )
}
