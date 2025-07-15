import "../../../Pages/MainProjects/Projects.css";
import "../../../Pages/MainProjects/Projects.scss";
import { Link } from "react-router-dom";

export default function ProjectCard({ imgSrc, title, btnText, btnLink, lang }) {
  const isAr = lang === "ar";
  return (
    <div className="grid">
      <img src={imgSrc} alt={title} className="ProjectsImgMain" />
      <div className="card">
        <div className={`CardTitle ${isAr ? "ar" : "en"}`}>{title}</div>
        <div className="shine"></div>
        <div className="background">
          <div className="tiles">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className={`tile tile-${i + 1}`}></div>
            ))}
          </div>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <Link to={btnLink}>
          <div className={`BtnAnimation ${isAr ? "ar" : "en"}`}>
            <span>{btnText}</span>
            <span>{btnText}</span>
            <span>{btnText}</span>
            <span>{btnText}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
