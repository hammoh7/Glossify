import { MobileHeader } from "@/components/start/mobile-header";
import { Sidebar } from "@/components/start/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[250px] h-full pt-[50px] lg:pt-0">
        <div className="h-full bg-gradient-to-t from-violet-300 to-indigo-500">
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
