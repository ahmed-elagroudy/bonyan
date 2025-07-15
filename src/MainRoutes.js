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
import ProjectPage from "./Assets/Component/ProjectComponent/ProjectPage";

export default function MainRoutes() {
  const location = useLocation();
  const isEnglish = location.pathname.includes("/en");

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const basePath = location.pathname.replace(/\/en$/, "");
    const route = RoutePages.find((r) => r.path === basePath);
    document.title = route ? (isEnglish ? route.enTitle : route.arTitle) : isEnglish ? "Bonyan" : "بنيان";
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  const HeaderComponent = isSmallScreen ? (isEnglish ? EnglishHeaderMobile : ArabicHeaderMobile) : isEnglish ? EnglishHeader : ArabicHeader;

  const FooterComponent = isSmallScreen ? (isEnglish ? EnglishFooterMobile : ArabicFooterMobile) : isEnglish ? EnglishFooter : ArabicFooter;

  const renderRoutes = (routes) => (
    <div data-scroll-section>
      <Routes>
        {routes.map(({ path, enComponent }, index) => (
          <Route key={`en-${index}`} path={`${path}/en`} element={enComponent} />
        ))}

        {routes.map(({ path, arComponent }, index) => (
          <Route key={index} path={path} element={arComponent} />
        ))}

        <Route path="/:projectId/en" element={<ProjectPage lang="en" />} />
        <Route path="/:projectId" element={<ProjectPage lang="ar" />} />

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
