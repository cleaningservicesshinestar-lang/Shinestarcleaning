import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Cleaning Services | Shine Star",
  description: "Heavy-duty industrial cleaning for warehouses, factories, and manufacturing facilities. Specialized equipment and trained personnel.",
};

export default function IndustrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

