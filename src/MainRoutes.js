import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import EnglishHeader from "./Assets/Component/Header/EnglishHeader";
import ArabicHeader from "./Assets/Component/Header/ArabicHeader";
import EnglishHeaderMobile from "./Assets/Component/Header/EnglishHeaderMobile";
import ArabicHeaderMobile from "./Assets/Component/Header/ArabicHeaderMobile";
import EnglishFooter from "./Assets/Component/Footer/EnglishFooter";
import ArabicFooter from "./Assets/Component/Footer/ArabicFooter";
import EnglishFooterMobile from "./Assets/Component/Footer/EnglishFooterMobile";
import ArabicFooterMobile from "./Assets/Component/Footer/ArabicFooterMobile";
import ScrollToTop from "./Assets/Hooks/ScrollUp/ScrollUp";
import RoutePages from "./RoutePages";

export default function MainRoutes() {
  const location = useLocation();
  const isArabic = location.pathname.endsWith("/ar");

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const basePath = isArabic ? (location.pathname === "/ar" ? "/" : location.pathname.replace(/\/ar$/, "")) : location.pathname;
    const route = RoutePages.find((r) => r.path === basePath);
    document.title = route ? (isArabic ? route.arTitle : route.enTitle) : isArabic ? "يونيفورم ارينا" : "Bonyan";
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  const HeaderComponent = isSmallScreen ? (isArabic ? ArabicHeaderMobile : EnglishHeaderMobile) : isArabic ? ArabicHeader : EnglishHeader;
  const FooterComponent = isSmallScreen ? (isArabic ? ArabicFooterMobile : EnglishFooterMobile) : isArabic ? ArabicFooter : EnglishFooter;

  const renderRoutes = (routes) => (
    <div data-scroll-section>
      <Routes>
        {routes.map(({ path, enComponent, arComponent }, index) => (
          <Route key={index} path={path} element={isArabic ? arComponent : enComponent} />
        ))}
        {routes.map(({ path, arComponent }, index) => (
          <Route key={`ar-${index}`} path={`${path}/ar`} element={arComponent} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );

  return (
    <>
      <HeaderComponent />
      <ScrollToTop />
      {renderRoutes(RoutePages)}
      <FooterComponent />
    </>
  );
}
