import React, {ReactNode} from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackTop from "@/components/backtop";

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <main className="flex min-h-screen flex-col  bg-whConfig overflow-x-hidden">
      {children}
    </main>
    <Footer />
    <BackTop />
  </>
);

export default DefaultLayout;
