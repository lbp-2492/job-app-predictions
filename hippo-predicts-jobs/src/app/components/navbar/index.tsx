import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Buttons from "./buttons";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 flex bg-black text-neutral-50 sticky top-0">
        <Logo />
        <Buttons />
      </div>
    </>
  );
};

export default Navbar;

/*
<div className="container bg-slate-200 mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            
            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
*/