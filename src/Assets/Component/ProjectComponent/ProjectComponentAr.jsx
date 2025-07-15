import "./Project.css";
import SmoothGallery from "../SmoothGallery/SmoothGallery";
import { Link } from "react-router-dom";

export default function ProjectComponentAr({ title, description, images, cards }) {
  return (
    <div className="ProjectContainer ar">
      <div className="ProjectS1" dir="rtl">
        <div className="background-overlay"></div>
        <div className={`ProS1P1TF ar FLeowB20pxFW7`}>
          <Link to="/projects">كل المشاريع</Link>
          <div>&gt;</div>
          <div className={`CS1P1T ar`}>{title}</div>
        </div>
        <div className={`ProS1P1TF2 ar FLeowB32pxFW7`}>{title}</div>
      </div>
      <div className="ProjectDisP1 ar">
        <div className="ProDisP1Title ar FLeowB32pxFW7">{title}</div>
        <SmoothGallery images={images} />
      </div>

      <div className="ProjectDisP2 ar" dir="rtl">
        <div className="ProDisP2Title ar FLeowB32pxFW7">- {title}</div>
        <div className="ProDisP2Desc ar FLeowL24pxFW4">{description}</div>
      </div>

      <div className="ProjectDisP3" dir="rtl">
        {cards.map((card, index) => (
          <ProjectCard key={index} label={card.label} value={card.value} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ label, value }) {
  return (
    <div className="ProjectCardC ar" dir="rtl">
      <div className="ProCardLabel ar">
        <span className="ProCardLine ar"></span>
        <span className="ProCardTitle ar FLeowB20pxFW7">{label}</span>
      </div>
      <div className="ProCardValue ar FLeowL16pxFW4">{value}</div>
    </div>
  );
}
