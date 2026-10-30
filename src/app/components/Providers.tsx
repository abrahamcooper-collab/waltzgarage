"use client";

import { QuoteProvider } from "@/app/context/QuoteContext";
import QuoteModal from "@/app/components/QuoteModal";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QuoteProvider>
      {children}
      <QuoteModal />
    </QuoteProvider>
  );
}
