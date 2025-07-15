import "./Project.css";
import SmoothGallery from "../SmoothGallery/SmoothGallery";
import { Link } from "react-router-dom";

export default function ProjectComponentEn({ title, description, images, cards }) {
  return (
    <div className="ProjectContainer">
      <div className="ProjectS1">
        <div className="background-overlay"></div>
        <div className={`ProS1P1TF FLeowB20pxFW7`}>
          <Link to="/Projects/en">All Projects</Link>
          <div>&gt;</div>
          <div className="CS1P1T">{title}</div>
        </div>
        <div className="ProS1P1TF2 FLeowB32pxFW7">{title}</div>
      </div>
      <div className="ProjectDisP1">
        <div className="ProDisP1Title FLeowB32pxFW7">{title}</div>
        <SmoothGallery images={images} />
      </div>

      <div className="ProjectDisP2">
        <div className="ProDisP2Title FLeowB32pxFW7">- {title}</div>
        <div className="ProDisP2Desc FLeowL24pxFW4">{description}</div>
      </div>

      <div className="ProjectDisP3">
        {cards.map((card, index) => (
          <ProjectCard key={index} label={card.label} value={card.value} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ label, value }) {
  return (
    <div className="ProjectCardC">
      <div className="ProCardLabel">
        <span className="ProCardLine"></span>
        <span className="ProCardTitle FLeowB16pxFW7">{label}</span>
      </div>
      <div className="ProCardValue FLeowL16pxFW4">{value}</div>
    </div>
  );
}
