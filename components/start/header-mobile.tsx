import SidebarMobile from "./sidebar-mobile";

const HeaderMobile = () => {
  return (
    <div className="flex items-center lg:hidden px-5 h-[48px] bg-gradient-to-t from-sky-300 to-blue-500 border-b fixed top-0 w-full z-50">
      <SidebarMobile />
    </div>
  );
};

export default HeaderMobile;
