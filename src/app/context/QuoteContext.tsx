"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
  isOpen: boolean;
  preSelectedService: string | null;
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const QuoteContext = createContext<QuoteContextType>({
  isOpen: false,
  preSelectedService: null,
  openModal: () => {},
  closeModal: () => {},
});

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | null>(null);

  const openModal = (service?: string) => {
    setPreSelectedService(service ?? null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPreSelectedService(null);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, preSelectedService, openModal, closeModal }}>
      {children}
    </QuoteContext.Provider>
  );
}

export const useQuote = () => useContext(QuoteContext);
