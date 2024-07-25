"use client"
import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false);

  return (
    <NavbarContext.Provider value={{ isNavbarTransparent, setIsNavbarTransparent }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
