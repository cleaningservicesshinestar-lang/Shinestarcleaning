import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Cleaning Services | Shine Star",
  description: "Professional residential cleaning services for homes. Deep cleaning, regular maintenance, and specialty cleaning for a spotless home.",
};

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

