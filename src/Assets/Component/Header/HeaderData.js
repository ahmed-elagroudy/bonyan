// HeaderData.js
import { RoutesEn, RoutesAr } from "../../Hooks/RoutesDynamic/RoutesDynamic";

// Menu items (shared where possible, with web and mobile-specific adjustments)
export const menu = [
  { label: "Home", to: RoutesEn.Home, labelAr: "الرئيسية", toAr: RoutesAr.Home },
  { label: "About", to: RoutesEn.About, labelAr: "ماذا عنا", toAr: RoutesAr.About },
  { label: "Projects", to: RoutesEn.Projects, labelAr: "المشاريع", toAr: RoutesAr.Projects },
  { label: "Careers", to: RoutesEn.Careers, labelAr: "المهن", toAr: RoutesAr.Careers },
];

// Contact link
export const contactLink = { label: "Contact us", to: RoutesEn.Contact, labelAr: "تواصل معنا", toAr: RoutesAr.Contact };
