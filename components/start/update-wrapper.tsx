interface UpdateWrapperProps {
    children: React.ReactNode;
}

const UpdateWrapper = ({
    children
}: UpdateWrapperProps) => {
    return ( 
        <div className="flex-1 relative top-0 pb-10">
            {children}
        </div>
     );
}
 
export default UpdateWrapper;