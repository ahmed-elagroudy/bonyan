import { useParams } from "react-router-dom";
import projectData from "../../../Pages/ProjectData/ProjectData";
import ProjectComponentEn from "./ProjectComponentEn";
import ProjectComponentAr from "./ProjectComponentAr";

export default function ProjectPage({ lang = "en" }) {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);
  console.log("Params:", projectId);
  console.log(
    "All IDs:",
    projectData.map((p) => p.id)
  );

  if (!project)
    return (
      <>
        <div>Project not found</div>
      </>
    );

  const Component = lang === "ar" ? ProjectComponentAr : ProjectComponentEn;

  return (
    <Component
      title={project.title[lang]}
      description={project.description[lang]}
      images={project.images}
      cards={project.cards.map((card) => ({
        label: card.label[lang],
        value: card.value[lang],
      }))}
    />
  );
}
