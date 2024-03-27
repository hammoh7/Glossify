"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/route";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex items-center w-full">
      <Button
        size="lg"
        className="w-full mr-2"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-6 w-6" />
      </Button>
      <Button
        size="lg"
        className="w-full ml-2"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <GrGithub className="h-6 w-6" />
      </Button>
    </div>
  );
};
