"use client";

import { useQuote } from "@/app/context/QuoteContext";
import { ReactNode } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  service?: string;
  children: ReactNode;
  id?: string;
}

export default function BookServiceButton({ className, style, service, children, id }: Props) {
  const { openModal } = useQuote();
  return (
    <button
      id={id}
      onClick={() => openModal(service)}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
