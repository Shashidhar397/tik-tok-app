import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isServerRR, setIsServerRR] = useState(true);

  useEffect(() => {
    setIsServerRR(false);
  }, []);

  if (isServerRR) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xq:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh]">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default MyApp;
