import React from "react";
import "./projects.css";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({
  img,
  title,
  jobTitle,
  info,
  info2,
  workTime,
  customClassName,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

  return (
    <div className="personal-project">
      <div className="project-image">
        <img
          src={img}
          alt={title}
          width={isMobile ? 290 : 348}
          height={isMobile ? 146 : 180}
          style={{
            borderRadius: "4%",
            border: "1px solid #000",
          }}
        />
      </div>
      <div
        className={`project-container ${customClassName}`}
        style={{
          border: "1px solid #000",
          padding: "10px",
          height: isMobile ? "260px" : "287px",
        }}
      >
        <div className="project-title">{title}</div>
        <div className="project-job-title">{jobTitle}</div>
        <span className="work-times">{workTime}</span>
        <p className="project-info">{info}</p>
        <p className="project-info-2">{info2}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
