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
