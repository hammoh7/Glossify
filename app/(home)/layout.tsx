import { Footer } from "./_components/(footer)/page";
import Navbar from "./_components/(navbar)/page";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-gradient-to-r from-violet-300 to-indigo-500">
      <nav>
        <Navbar />
      </nav>
      <main className="pt-28 pb-25">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
