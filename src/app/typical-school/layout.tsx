import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome!!! :: Everest Model School",
  description: "Typical outdated school website demo",
  robots: "noindex, nofollow",
};

export default function TypicalSchoolLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
