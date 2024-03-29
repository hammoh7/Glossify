type LearnWrapperProps = {
    children: React.ReactNode;
}

export const LearnWrapper = ({
    children
}: LearnWrapperProps) => {
    return (
        <div className="flex-1 relative top-0 pb-8">
            {children}
        </div>
    )
}