import { useEffect } from "react"

import Sidebar from "./Sidebar"
import { Button } from "./ui/Button"

const iconButtonClass = "p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"

type MobileSidebarDrawerProps = {
    isOpen: boolean
    onClose: () => void
}

const MobileSidebarDrawer = ({ isOpen, onClose }: MobileSidebarDrawerProps) => {
    useEffect(() => {
        if (!isOpen) {
            return
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", handleEscape)

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex lg:hidden">
            <Button
                className="absolute inset-0 border-0 bg-black/40"
                onPress={onClose}
                aria-label="Close navigation menu"
            />
            <div className="relative z-10 h-full w-[280px] max-w-[85vw] bg-white shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                    <p className="text-[1.8rem] font-semibold">Menu</p>
                    <Button
                        className={`${iconButtonClass} text-[2rem]`}
                        onPress={onClose}
                        aria-label="Close navigation menu"
                    >
                        <i className="bi bi-x-lg"></i>
                    </Button>
                </div>
                <Sidebar
                    bordered={false}
                    fullWidth={true}
                />
            </div>
        </div>
    )
}

export default MobileSidebarDrawer