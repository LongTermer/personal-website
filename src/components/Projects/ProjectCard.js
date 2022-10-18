import React from "react";
import "./projects.css";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({ img, title, info, info2 }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

  return (
    <div className="personal-project">
      <div className="project-image">
        <img
          src={img}
          alt={title}
          width={isMobile ? 290 : 358}
          height={isMobile ? 146 : 180}
          style={{
            borderRadius: "4%",
            border: "1px solid #000",
          }}
        />
      </div>
      <div
        className="project-container"
        style={{ border: "1px solid #000", padding: "10px" }}
      >
        <div className="project-title">{title}</div>
        <p className="project-info">{info}</p>
        <p className="project-info-2">{info2}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
