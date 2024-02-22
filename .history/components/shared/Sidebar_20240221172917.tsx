import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo">
          <Image
            src={"/assets/images/logo-text.svg"}
            alt="logo"
            width={"180"}
            height="280"
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>

            <ul className="sidebar-nav_elements">
              {navLinks.map(link)=>{
                const isActive= link.route === pathname

                return(
                  <li key={link.route}></li>
                )
              }}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
