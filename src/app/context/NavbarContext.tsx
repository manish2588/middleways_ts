"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface NavbarContextType {
  isNavbarTransparent: boolean;
  setIsNavbarTransparent: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value of undefined
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(false);

  return (
    <NavbarContext.Provider value={{ isNavbarTransparent, setIsNavbarTransparent }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};
