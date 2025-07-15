import projectData from "../../../Pages/ProjectData/ProjectData";

// here to add new path
const staticRoutes = {
  Home: "",
  About: "About-us",
  Projects: "Projects",
  Careers: "Career",
  Contact: "Contact-us",
};

export const Routes = {};
export const RoutesAr = {};
export const RoutesEn = {};

// Generate static routes
for (const key in staticRoutes) {
  RoutesAr[key] = staticRoutes[key] === "" ? "/" : `/${staticRoutes[key]}`;
  RoutesEn[key] = staticRoutes[key] === "" ? "/en" : `/${staticRoutes[key]}/en`;
  Routes[key] = {
    ar: RoutesAr[key],
    en: RoutesEn[key],
  };
}

// Generate dynamic project routes
projectData.forEach((proj) => {
  const id = proj.id;
  RoutesAr[id] = `/${id}`;
  RoutesEn[id] = `/${id}/en`;
  Routes[id] = {
    ar: `/${id}`,
    en: `/${id}/en`,
  };
});
