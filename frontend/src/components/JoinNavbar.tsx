import { useAuth } from '../context/AuthContext'

export default function JoinNavbar(){
    const {user, isAuthenticated} = useAuth()
    return (
        <nav className='flex items-center justify-between border-b border-green-200 bg-white p-3 text-green-700 dark:border-green-800 dark:bg-black dark:text-green-300'>
            <h1 className='text-lg font-bold'>Quiz App</h1>
            <div className='rounded-sm border border-green-200 px-3 py-2 text-sm dark:border-green-800'>
                {isAuthenticated && user ? (
                    <span>{user.last_name}'s dashboard</span>
                ) : (
                    <span>My dashboard</span>
                )}
            </div>
        </nav>
    )
}
