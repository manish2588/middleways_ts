"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import image from "../../../public/images/hi-removebg-preview.png"; 
import { useNavbarContext } from "../context/NavbarContext";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { isNavbarTransparent, setIsNavbarTransparent } = useNavbarContext();
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const handleMediaClick = () => {
    setSidebarOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarTransparent(false);
      } else if (pathname === "/pages/service") {
        setIsNavbarTransparent(true);
      } else {
        setIsNavbarTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, setIsNavbarTransparent]);

  useEffect(() => {
    if (pathname === "/pages/service") {
      setIsNavbarTransparent(true);
    } else {
      setIsNavbarTransparent(false);
    }
  }, [pathname, setIsNavbarTransparent]);

  const handleLinkClick = () => setSidebarOpen(false);

  const getActivePageName = (): string => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/pages/about":
        return "About";
      case "/pages/service":
        return "Services";
      case "/media":
        return "Media";
      case "/pages/contact":
        return "Contact";
      default:
        return "";
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 bg-blue-200 text-black transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-30
        w-64 h-full md:w-72 md:h-full lg:w-96 lg:h-full
        sm:w-48 sm:h-full sm:overflow-y-auto`}
      >
        <div className="p-4">
          <button className="text-black" onClick={toggleSidebar}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <h1 className="font-sniglet text-lg font-light">VIDEOGRAPHY</h1>
          <h2 className="mt-2 leading-tight tracking-wide font-sniglet text-lg font-light">
            Engrossing Tales Through The Lens
            <br /> of <br />
            <span className="font-sniglet text-2xl font-light">
              Middleways Films
            </span>
          </h2>
          <Image src={image} className="h-16 w-32 mt-2 mx-auto" alt="Logo" />
        </div>
        <ul className="p-2 space-y-6 text-2xl font-openSans font-semibold">
          <li
            className={`${
              pathname === "/" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-400 hover:text-white transition duration-300`}
          >
            <Link href="/" className="block p-2" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li
            className={`${
              pathname === "/pages/about" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-400 hover:text-white transition duration-300`}
          >
            <Link
              href="/pages/about"
              className="block p-2"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li
            className={`${
              pathname === "/pages/service" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-400 hover:text-white transition duration-300`}
          >
            <Link
              href="/pages/service"
              className="block p-2"
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </li>
          <li
            className={`relative ${
              pathname === "/pages/media" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-400 hover:text-white transition duration-300`}
          >
            <div className="flex items-center">
              <Link
                href="/pages/media"
                className="block p-2 flex-1"
                onClick={handleLinkClick}
              >
                Media
              </Link>
              <button
                className="ml-2 text-black text-3xl focus:outline-none"
                onClick={toggleDropdown}
              >
                ▼
              </button>
            </div>
            {isDropdownOpen && (
              <ul className="absolute left-60 mt-1 w-auto bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <li className="hover:bg-gray-100">
                  <Link
                    href="/pages/photos"
                    className="block px-4 py-2 text-black"
                    onClick={handleMediaClick}
                  >
                    Photos
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    href="/pages/videos"
                    className="block px-4 py-2 text-black"
                    onClick={handleMediaClick}
                  >
                    Videos
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`${
              pathname === "/pages/contact" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-400 hover:text-white transition duration-300`}
          >
            <Link
              href="/pages/contact"
              className="block p-2"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between z-20 transition-all duration-300 ${
          isNavbarTransparent
            ? "bg-transparent text-white"
            : "bg-slate-100 text-black shadow-lg"
        }
  p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6
  text-sm sm:text-base md:text-lg lg:text-xl
  `}
      >
        <div className="flex items-center">
          <button className="focus:outline-none ml-6" onClick={toggleSidebar}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden sm:block ml-4 text-xl font-mono">
            {getActivePageName()}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center">
            <Image
              src={image}
              alt="Middleways Films"
              className="h-16 w-32"
            />
            <div className="hidden md:flex flex-col ml-4">
              <span className="text-3xl font-josefinSans font-semibold">
                MIDDLEWAYS
              </span>
              <span className="text-2xl font-josefinSans font-medium">
                {" "}
                FILMS
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-4">
          <Link href="/pages/joinus">
            <button className="bg-teal-600 font-openSans hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 text-lg rounded-full border-teal-200 px-4 py-2 text-center transition duration-300">
              JOIN US
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;