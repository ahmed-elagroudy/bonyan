import { RoutesEn } from "./Assets/Hooks/RoutesDynamic/RoutesDynamic";
import Home from "./Pages/Home/Home";
import ContactEn from "./Pages/Contact/Contact";
import ContactAr from "./Pages/Contact/ContactAr";

const RoutePages = [
  { path: RoutesEn.Home, enComponent: <Home />, arComponent: <Home />, enTitle: "Bonyan - Home", arTitle: "بنيان - الرئيسية" },
  { path: RoutesEn.About, enComponent: <Home />, arComponent: <Home /> },
  { path: RoutesEn.Contact, enComponent: <ContactEn />, arComponent: <ContactAr />, enTitle: "Bonyan - Contact us", arTitle: "بنيان - تواصل معنا" },
];

export default RoutePages;
