"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import image from '../../../public/images/hi-removebg-preview.png'; // Adjust the path if necessary
import { useNavbarContext } from '../context/NavbarContext'; // Adjust the path if needed

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { isNavbarTransparent, setIsNavbarTransparent } = useNavbarContext();
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarTransparent(false);
      } else if (pathname === '/pages/service') {
        setIsNavbarTransparent(true);
      } else {
        setIsNavbarTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, setIsNavbarTransparent]);

  useEffect(() => {
    if (pathname === '/pages/service') {
      setIsNavbarTransparent(true);
    } else {
      setIsNavbarTransparent(false);
    }
  }, [pathname, setIsNavbarTransparent]);

  const handleLinkClick = () => setSidebarOpen(false);

  const getActivePageName = (): string => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/pages/about':
        return 'About';
      case '/pages/service':
        return 'Services';
      case '/media':
        return 'Media';
      case '/pages/contact':
        return 'Contact';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-96 bg-blue-200 text-black transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-30`}
      >
        <div className="p-4">
          <button 
            className="text-black"
            onClick={toggleSidebar}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <h1 className="font-sniglet text-lg font-light">VIDEOGRAPHY</h1>
          <h2 className="mt-2 leading-tight tracking-wide font-sniglet text-lg font-light">
            Engrossing Tales Through The Lens<br/> of <br />
            <span className='font-sniglet text-2xl font-light'>Middleways Films</span> 
          </h2>
          <Image src={image} className='h-16 w-32 mt-2 mx-auto' alt="Logo" />
        </div>
        <ul className="p-2 space-y-6 text-2xl font-openSans font-semibold">
          <li className={`${pathname === '/' ? 'bg-blue-300 text-white' : ''} hover:bg-blue-400 hover:text-white transition duration-300`}>
            <Link href="/" className="block p-2" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className={`${pathname === '/pages/about' ? 'bg-blue-300 text-white' : ''} hover:bg-blue-400 hover:text-white transition duration-300`}>
            <Link href="/pages/about" className="block p-2" onClick={handleLinkClick}>About</Link>
          </li>
          <li className={`${pathname === '/pages/service' ? 'bg-blue-300 text-white' : ''} hover:bg-blue-400 hover:text-white transition duration-300`}>
            <Link href="/pages/service" className="block p-2" onClick={handleLinkClick}>Services</Link>
          </li>
          <li className={`relative ${pathname === '/media' ? 'bg-blue-300 text-white' : ''} hover:bg-blue-400 hover:text-white transition duration-300`}>
            <div className="flex items-center">
              <Link href="/media" className="block p-2 flex-1" onClick={handleLinkClick}>Media</Link>
              <button 
                className="ml-2 text-black text-3xl focus:outline-none"
                onClick={toggleDropdown}
              >
                ▼
              </button>
            </div>
            {isDropdownOpen && (
              <ul className="absolute left-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <li className="hover:bg-gray-100">
                  <Link href="/media/photos" className="block px-4 py-2 text-black">Photos</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/media/videos" className="block px-4 py-2 text-black">Videos</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`${pathname === '/pages/contact' ? 'bg-blue-300 text-white' : ''} hover:bg-blue-400 hover:text-white transition duration-300`}>
            <Link href="/pages/contact" className="block p-2" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full p-4 flex items-center justify-between z-20 transition-all duration-300 ${isNavbarTransparent ? 'bg-transparent text-white' : 'bg-slate-100 text-black shadow-lg'}`}>
        <div className="flex items-center">
          <button 
            className="focus:outline-none ml-6"
            onClick={toggleSidebar}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <span className="ml-4 text-xl font-mono">{getActivePageName()}</span>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center ">
            <Image src={image} alt="Middleways Films" className='h-16 w-32 hidden lg:block' />
            <div className='flex flex-col'>
              <span className="text-3xl font-josefinSans font-semibold">MIDDLEWAYS</span>
              <span className="text-2xl font-josefinSans font-medium"> FILMS</span>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-16">
          <Link href="/pages/joinus">
            <button className="bg-teal-600 font-openSans hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 text-lg rounded-full border-teal-200 px-4 py-2 text-center transition duration-300 ">
              JOIN US
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
