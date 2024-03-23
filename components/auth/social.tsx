"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
    return (
        <div className="flex items-center w-full">
            <Button size="lg" className="w-full ml-20 mr-20" variant="outline" onClick={() => {}}>
                <FcGoogle className="h-6 w-6" />
            </Button>
        </div>
    )
}