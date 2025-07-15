import { RoutesAr } from "./Assets/Hooks/RoutesDynamic/RoutesDynamic";
import Home from "./Pages/Home/Home";
import HomeAr from "./Pages/Home/HomeAr";
import ContactEn from "./Pages/Contact/Contact";
import ContactAr from "./Pages/Contact/ContactAr";
import About from "./Pages/About/About";
import AboutAr from "./Pages/About/AboutAr";
import CareersAr from "./Pages/Careers/CareersAr";
import Careers from "./Pages/Careers/Careers";
import Projects from "./Pages/MainProjects/Projects";

const RoutePages = [
  { path: RoutesAr.Home, enComponent: <Home />, arComponent: <HomeAr />, enTitle: "Bonyan - Home", arTitle: "بنيان - الرئيسية" },
  { path: RoutesAr.About, enComponent: <About />, arComponent: <AboutAr />, enTitle: "Bonyan - About us", arTitle: "بنيان - ماذا عنا" },
  { path: RoutesAr.Contact, enComponent: <ContactEn />, arComponent: <ContactAr />, enTitle: "Bonyan - Contact us", arTitle: "بنيان - تواصل معنا" },
  { path: RoutesAr.Careers, enComponent: <Careers />, arComponent: <CareersAr />, enTitle: "Bonyan - Careers", arTitle: "بنيان - المهن" },
  { path: RoutesAr.Projects, enComponent: <Projects />, arComponent: <Projects />, enTitle: "Bonyan - Projects", arTitle: "بنيان - المشاريع" },
];

export default RoutePages;
