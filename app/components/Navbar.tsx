"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MENU = [
    {
      title: "Templates",
      route: "/templates",
    },
    {
      title: "Service",
      route: "/service",
    },
    {
      title: "Pricing",
      route: "/pricing",
    },
    {
      title: "Customers",
      route: "/customers",
    },
  ];
  return (
    <nav className="relative flex items-center">
      <div className="wrapper flex items-center justify-between py-4">
        <div>
          <p className="text-[32px] font-bold">
            <Link href={"/"}>Stitle.</Link>
          </p>
        </div>
        <div className="md:flex hidden">
          <ul className="flex gap-7">
            {MENU.map((item) => (
              <li key={item.route}>
                <Link
                  href={item.route}
                  className="font-medium text-white transition-colors duration-200 hover:text-brand-green hover:underline underline-offset-4"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex hidden">
          <Button variant="primary">Let&apos;s, do it</Button>
        </div>
        <div className="md:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose className="text-3xl text-white" /> : <RxHamburgerMenu className="text-3xl text-white" />}
          </button>
        </div>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-body-bg shadow-md overflow-hidden transition-[max-height] duration-500 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6">
          {MENU.map((item) => (
            <li key={item.route}>
              <Link
                href={item.route}
                className="block font-medium text-white transition-colors duration-200 hover:text-brand-green hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Button variant="primary" className="w-full">
              Let&apos;s, do it
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
