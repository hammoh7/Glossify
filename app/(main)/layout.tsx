import HeaderMobile from "@/components/start/header-mobile";
import Sidebar from "@/components/start/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderMobile />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full lg:pl-[260px] pt-[45px] lg:pt-0">
        <div className="h-full max-w-[1300px] mx-auto pt-5 bg-gradient-to-r from-violet-300 to-indigo-500">
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
