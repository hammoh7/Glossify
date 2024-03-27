"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/hooks/current-user";

const MainPage = () => {
  const user = currentUser();
  const onClick = () => {
    logout();
  };
  return (
    <div className=" p-2 rounded-md ml-auto">
      <Button
        className="text-white text-md bg-gradient-to-l from-red-400 to-orange-500 rounded-md shadow-md transform transition-transform hover:translate-y-[-3px]"
        onClick={onClick}
        type="submit"
      >
        Logout
      </Button>
    </div>
  );
};

export default MainPage;
