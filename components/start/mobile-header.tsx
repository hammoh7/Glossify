import { MobileSidebar } from "./mobile-sidebar"

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-5 h-[50px] flex items-center bg-gradient-to-t from-yellow-300 to-yellow-600 border-b fixed top-0 w-full z-50">
            <MobileSidebar />
        </nav>
    )
}