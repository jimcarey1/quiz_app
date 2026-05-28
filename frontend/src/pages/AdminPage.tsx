import Sidebar from "../components/Sidebar";

export default function AdminPage(){
    return (
        <main className='flex items-center h-screen'>
            <Sidebar />
            <div className='flex-1 flex flex-col items-center'>
                <div className='flex justify-end w-full p-4'>
                    <span>Enter code</span>
                </div>
            </div>
        </main>
    )
}