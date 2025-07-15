import "./Projects.css";
import "./Projects.scss";
import { Link, useLocation } from "react-router-dom";
import projectData from "../ProjectData/ProjectData";
import ProjectCard from "../../Assets/Component/ProjectCard/ProjectCard";

export default function Projects() {
  const location = useLocation();
  const isEnglish = location.pathname.includes("/en");
  const lang = isEnglish ? "en" : "ar";

  return (
    <div className="ProjectsC">
      <ProjectsS1 lang={lang} />
      <div className="ProjectsDis">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.images[0]}
            title={project.title[lang]}
            btnText={isEnglish ? "View More" : "رؤية المزيد"}
            btnLink={`/${project.id}${isEnglish ? "/en" : ""}`}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectsS1({ lang }) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  const isAr = lang === "ar";
  return (
    <div className="ProjectS1" dir={dir}>
      <div className="background-overlay"></div>
      <div className={`CarS1P1 ${isAr ? "ar" : ""} FLeowB20pxFW7`}>
        <Link to={isAr ? "/" : "/en"}>{isAr ? "الرئيسية" : "Home"}</Link>
        <div>&gt;</div>
        <div className={`CS1P1T ${isAr ? "ar" : ""}`}>{isAr ? "المشاريع" : "Projects"}</div>
      </div>
      <div className={`CarS1P2 ${isAr ? "ar" : ""} FLeowB32pxFW7`}>{isAr ? "المشاريع" : "Projects"}</div>
    </div>
  );
}
