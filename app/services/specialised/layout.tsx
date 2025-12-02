import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialised Cleaning Services | Shine Star",
  description: "Specialized cleaning services including carpet, window, floor, pressure washing, disinfection, and sanitization. Expert solutions for unique cleaning needs.",
};

export default function SpecialisedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

