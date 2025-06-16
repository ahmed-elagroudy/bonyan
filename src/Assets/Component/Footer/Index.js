import React, { useState, useEffect } from "react";
import FooterContent from "./Footer";

export default function Footer() {
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
      <FooterContent />
      {/* {isMobile ? <FooterHalf /> : <FooterHalf />} */}
    </>
  );
}
