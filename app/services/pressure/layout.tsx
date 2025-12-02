import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pressure Washing Services | Shine Star",
  description: "Professional high-pressure exterior cleaning for homes, driveways, buildings, and commercial surfaces.",
};

export default function PressureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

