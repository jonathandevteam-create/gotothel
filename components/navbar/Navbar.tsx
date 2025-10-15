"use client";

import React from "react";
import localData from "@/localData";
import { ButtonDemo } from "@/components/index.js";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";
import Link from "next/link";

const { logo } = localData.images;

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
];

export const dropdownLinksModules: { title: string; href: string; description: string }[] = [
  {
    title: "item 1",
    href: "/modules/item-1",
    description: "",
  },
  {
    title: "item 2",
    href: "/modules/item-2",
    description: "",
  },
  {
    title: "item 3",
    href: "/modules/item-3",
    description: "",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="container  py-5 flex items-center justify-between ">
        {/* <img src={logo} alt="" className="max-w-[50px] h-auto " /> */}
        <Link href="/">
          <img src={logo} alt="" className="max-w-[200px] h-auto " />
        </Link>

        <NavigationMenuDemo />

        <SidebarNavigationMenuDemo />

        {/* <div className="btn-group  gap-2 hidden lg:flex">
          <ButtonDemo variant="outline" text="Button" />
        </div> */}
      </div>
    </nav>
  );
}
