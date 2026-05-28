import { useAuth } from '../context/AuthContext'

export default function JoinNavbar(){
    const {user, isAuthenticated} = useAuth()
    return (
        <nav className='flex items-center justify-between p-2 bg-purple-600 text-white'>
            <h1 className='text-2xl font-bold'>Quiz App</h1>
            <div className='p-2 bg-purple-300 rounded-sm text-sm md:text-md'>
                {isAuthenticated ? (
                    <span>{user.last_name}'s dashboard</span>
                ) : (
                    <span>My dashboard</span>
                )}
            </div>
        </nav>
    )
}