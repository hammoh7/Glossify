type SideWrapperProps = {
    children: React.ReactNode;
}

export const SideWrapper = ({
    children
}: SideWrapperProps) => {
    return (
        <div className="hidden lg:block w-[350px] sticky self-end bottom-6">
            <div className="min-h-[calc(100vh-40px)] sticky top-5 flex flex-col gap-y-3">
                {children}
            </div>
        </div>
    )
}