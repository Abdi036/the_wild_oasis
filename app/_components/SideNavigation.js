"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const pathName = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/account",
      icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Reservations",
      href: "/account/reservations",
      icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Guest Profile",
      href: "/account/profile",
      icon: <UserIcon className="h-5 w-5 text-primary-600" />,
    },
  ];

  return (
    <nav className="border border-primary-900 flex flex-col min-h-[75vh]">
      <ul className="flex flex-col gap-2 flex-grow text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathName === link.href ? "bg-primary-800" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Push SignOutButton to the bottom */}
      <div className="mt-auto py-4">
        <SignOutButton />
      </div>
    </nav>
  );
}
