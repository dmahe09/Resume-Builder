import React from "react";
import { ExternalLink } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="shadow-sm w-full sticky top-0 bg-white dark:bg-gray-900 z-[9999]">
      <div className="w-full flex items-center justify-center h-auto bg-black"></div>
      <div className="w-full mx-auto max-w-7xl p-3 px-5 flex items-center justify-between">
        {/* JobGenius on the left */}
        <div className="flex items-center">
          <div>
            <h5 className="font-black text-lg text-primary">Resume Builder</h5>
          </div>
        </div>

        {/* Centered navigation links, shifted more to the right */}
        <div className="flex items-center justify-center flex-grow ml-24">
          <ul className="flex items-center gap-5 text-[14px] font-medium text-black dark:text-white">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Sign In and Get Started on the right */}
        <div className="flex items-center">
          <LoginLink>
            <Button variant="outline">Sign In</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Get Started</Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
