import React, { useState, useEffect } from "react";
import HeaderContent from "./Header";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 475);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 475);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* {isMobile ? <HeaderMobile /> : <Sidebar />} */}
      <HeaderContent />
      {/* {isMobile ? <FooterHalf /> : <FooterHalf />} */}
    </>
  );
}
