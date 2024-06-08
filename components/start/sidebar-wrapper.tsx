interface SidebarWrapperProps {
  children: React.ReactNode;
}

const SidebarWrapper = ({ children }: SidebarWrapperProps) => {
  return (
    <div className="hidden lg:block w-[340px] sticky self-end bottom-5">
      <div className="min-h-[calc(100vh-50px)] sticky top-6 flex flex-col gap-y-3">
        {children}
      </div>
    </div>
  );
};

export default SidebarWrapper;
