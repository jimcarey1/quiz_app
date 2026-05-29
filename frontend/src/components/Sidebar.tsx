import { Link } from "react-router";
import { IoMdHome } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GrPieChart } from "react-icons/gr";

import { ProgressBar } from "./ui/ProgressBar";

type SidebarProps = {
    className?: string;
    bordered?: boolean;
    fullWidth?: boolean;
}

export default function Sidebar({ className="", bordered=true, fullWidth=false }: SidebarProps){
    return (
        <aside className={`flex flex-col h-screen ${fullWidth ? 'w-full max-w-none' : 'w-full max-w-[200px]'} items-center gap-4 bg-gray-100 text-white p-4 ${bordered ? 'border-r border-slate-200' : ''} ${className}`}>
            <h2 className='text-2xl text-purple-600 font-bold'>Quiz App</h2>
            <nav className="flex-1 flex w-full items-center text-black">
                <div className="flex flex-col w-full h-full">
                    <div className='flex flex-col w-full gap-4 mb-1 border-b-2 border-gray-300 pb-4'>
                        <Link to="/admin" className='mx-1 bg-white p-2 rounded-md hover:bg-gray-200'>
                        <span className="flex items-center gap-1">
                            <IoMdHome className='inline-block mr-2' />
                            Home
                        </span>
                        </Link>
                        <Link to="/library" className='mx-1 p-2 rounded-md hover:bg-gray-200'>
                            <span className="flex items-center gap-1">
                                <MdOutlineLibraryBooks className='inline-block mr-2' />
                                Library
                            </span>
                        </Link>
                        <Link to="/sessions" className='mx-1 p-2 rounded-md hover:bg-gray-200'>
                            <span className="flex items-center gap-1">
                                <GrPieChart className='inline-block mr-2' />
                                Sessions
                            </span>
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col justify-end gap-1 mb-10">
                        <span>20/100 activities</span>
                        <ProgressBar 
                            value={20} 
                            label="Progress" 
                            formatOptions={{style: "percent"}}
                        />
                    </div>
                </div>
            </nav>
        </aside>
    )
}