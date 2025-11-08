"use client";
import React, { useState } from "react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import Image from "next/image";
import logo from "../../app//Images/logooo.png";
import Link from "next/link";

const menuitem = [
 {
   menuName: "Home",
   navLink: "/",
 },
 {
   menuName: "Services",
   navLink: "/",
 },
 {
   menuName: "About Me",
   navLink: "/",
 },
 {
   menuName: "Portfolio",
   navLink: "/",
 },
 {
   menuName: "contact Us",
   navLink: "/",
 },
];
const ResNav = () => {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <>
      <div className="lg:hidden relative z-50 w-full bg-black">
        <div>
          <div className="main flex items-center justify-between px-6 py-6">
            <div
              onClick={() => setShowMenu(true)}
              className="menu cursor-pointer text-white text-2xl"
            >
              <GiHamburgerMenu />
            </div>

            {/* ------logo------ */}
            <div className="logo">
              <h1 className="text-2xl text-amber-600 font-bold"><Image
              className="w-[100px] h-[100px] flex justify-center"
                                    src={logo}
                                    alt={logo}/></h1>
            </div>

            <div className="sin-button cursor-pointer w-[85px] h-[35px] flex items-center justify-center bg-amber-600 hover:bg-transparent text-sm text-white font-medium rounded-xl">
              Hire Me
            </div>
          </div>
        </div>

        {showMenu && (
            <div className="menu w-full h-screen bg-gray-950 fixed left-0 top-0 z-50">
            <div className="main flex items-center justify-between px-6 py-6">
              <div className="logo">
                <h1 className="text-2xl text-amber-600 font-bold">LOGO</h1>
              </div>

              <div
                onClick={() => setShowMenu(!showMenu)}
                className="menu cursor-pointer text-amber-950 text-2xl"
              >
                <GiTireIronCross />
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 mt-15">
              {menuitem.map((item, id) => (
                <Link
                  className="text-sm text-white hover:text-theme font-medium font-playfair"
                  key={id}
                  href={item.navLink}
                >
                  {item.menuName}
                </Link>
              ))}
            </div>

            {/* --------reg and login button---- */}
            <div className="buttons flex items-center justify-center gap-6 mt-10">
              <div className="sin-button cursor-pointer w-[100px] h-[45px] flex items-center justify-center bg-theme hover:bg-cofee text-sm text-text-black hover:text-white font-medium font-playfair rounded-full">
                Hire Me
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ResNav;
