import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactNode } from "react";
import { Main } from "./Main";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
