import React from 'react'
import ProjectCard from './ProjectCard'
import './projects.css'
import Skills from '../Skills/Skills'
import personalProject from '../../assets/personal_project.png'
import freelanceProject from '../../assets/freelance_project.png'
import longTermFi from '../../assets/longterm.png'
import avix from '../../assets/avix.jpg'

const Projects = () => (
  <div className="selected-projects" id="portfolio">
    <h1 className="portfolio-title selected-title">PRIOR EXPERIENCE</h1>
    <div className="border-line portfolio-border-line" />
    <div className="my-projects">
      <ProjectCard
        img={personalProject}
        title={'Personal Projects'}
        info={
          <span>
            <strong>I started building my first projects back in 2018</strong>{' '}
            and haven't stopped ever since.
          </span>
        }
        info2={
          <span>
            I've built dozens of different personal projects over time. All of
            them are fully open sourced and can be found on my{' '}
            <a
              href="https://github.com/mihailo-maksa"
              target="_blank"
              rel="noreferrer"
              className="bold project-card-link"
            >
              Github.
            </a>
          </span>
        }
      />
      <ProjectCard
        img={freelanceProject}
        title={'Freelance Frontend Web Developer'}
        info={
          <span>
            Back when I started freelancing, I was mostly building websites for
            the local businesses.
          </span>
        }
        info2={
          <span>
            Later, <strong>I focused on building ecommerce sites</strong> and
            supporting merchants on platforms like Shopify.
          </span>
        }
      />
      <ProjectCard
        img={avix}
        title={'Avix Finance'}
        info={
          <span>
            Avix Finance was <strong>a tokenized volatility protocol</strong>{' '}
            built on Avalanche C-Chain.
          </span>
        }
        info2={
          <span>
            <strong>I worked as a part of the frontend team</strong> and helped
            in optimizing the UI and creating the user dashboard.
          </span>
        }
      />
      <ProjectCard
        img={longTermFi}
        title={'LongTerm Finance'}
        info={
          <span>
            <a
              href="https://long-term.finance"
              target="_blank"
              rel="noreferrer"
              className="bold project-card-link"
            >
              LongTerm Finance
            </a>{' '}
            is <strong>a crypto index & lending protocol</strong> built on
            Polygon.
          </span>
        }
        info2={
          <span>
            <strong>I custom-built the entire frontend of the dApp</strong> and
            made significant contributions to its mainnet launch.
          </span>
        }
      />
      <div style={{ marginRight: '-30px' }} />
    </div>
    <Skills />
  </div>
)

export default Projects
