interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 bg-gradient-to-t from-violet-300 to-indigo-500">
            {children}
        </div>
    )
}

export default ProtectedLayout;