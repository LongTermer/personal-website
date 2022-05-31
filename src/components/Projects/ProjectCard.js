import React from 'react'
import './projects.css'

const ProjectCard = ({ img, title, info, info2 }) => {
  return (
    <div className="personal-project">
      {/* <div className="project-image">
        <img
          src={img}
          alt={title}
          width={350}
          height={180}
          style={{
            borderRadius: '4%',
          }}
        />
        </div> */}
      <div
        className="project-container"
        style={{ border: '1px solid #000', padding: '10px' }}
      >
        <div className="project-title">{title}</div>
        <p className="project-info">{info}</p>
        <p className="project-info-2">{info2}</p>
      </div>
    </div>
  )
}

export default ProjectCard
