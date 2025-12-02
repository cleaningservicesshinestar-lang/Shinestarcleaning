import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Shine Star",
  description: "Professional commercial cleaning for offices, retail, and businesses. Flexible scheduling, trained staff, and customized cleaning solutions.",
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

