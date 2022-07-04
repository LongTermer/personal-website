import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';
import Skills from '../Skills/Skills';
import personalProject from '../../assets/personal_project.png';
import freelanceProject from '../../assets/freelance_project.png';
import longTermFi from '../../assets/longterm.png';
import avix from '../../assets/avix.jpg';

const Projects = () => (
  <div className='selected-projects' id='portfolio'>
    <h1 className='portfolio-title selected-title'>PRIOR EXPERIENCE</h1>
    <div className='border-line portfolio-border-line' />
    <div className='my-projects'>
      <ProjectCard
        img={personalProject}
        title={'Personal Projects'}
        info={
          <span>
            <strong>
              I started building my first personal web3 projects back in 2018
            </strong>{' '}
            and haven't stopped ever since.
          </span>
        }
        info2={
          <span>
            <strong>
              I've built over 100 different personal projects over time.
            </strong>{' '}
            All of them are fully open sourced and can be found on my{' '}
            <a
              href='https://github.com/mihailo-maksa'
              target='_blank'
              rel='noopener noreferrer'
              className='bold project-card-link'
            >
              Github.
            </a>
          </span>
        }
      />
      <ProjectCard
        img={freelanceProject}
        title={'Freelance Web Developer'}
        info={
          <span>
            <strong>Back when I started freelancing,</strong> I was mostly
            building websites for the local businesses.
          </span>
        }
        info2={
          <span>
            These included projects with varying degrees of complexity, ranging{' '}
            <strong>from simple static pages to complex web stores.</strong>
          </span>
        }
      />
      <ProjectCard
        img={freelanceProject}
        title={'Ecommerce Specialist'}
        info={
          <span>
            Later, <strong>I focused on building ecommerce sites</strong> and
            supporting merchants on platforms like Shopify.
          </span>
        }
        info2={
          <span>
            My tasks included{' '}
            <strong>building custom themes, integrating various plugins</strong>{' '}
            and <strong>payment methods,</strong> including crypto payments.
          </span>
        }
      />
      <ProjectCard
        img={personalProject}
        title={'ScaleRoad LLC'}
        info={
          <span>
            <strong>
              <a
                href='https://scaleroad.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bold project-card-link'
              >
                ScaleRoad
              </a>{' '}
              is a platform for tracking and managing investment research
            </strong>{' '}
            in a structured and organized way.
          </span>
        }
        info2={
          <span>
            <strong>I was tasked with building custom UI elements</strong> and
            integrating complex subscription and usage-based{' '}
            <strong>payment methods.</strong>
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
            <strong>I worked as a part of the frontend team</strong> and{' '}
            <strong>helped with integrating on-chain oracles</strong> into the
            protocol's smart contracts.
          </span>
        }
      />
      <ProjectCard
        img={longTermFi}
        title={'LongTerm Finance'}
        info={
          <span>
            <a
              href='https://long-term.finance'
              target='_blank'
              rel='noopener noreferrer'
              className='bold project-card-link'
            >
              LongTerm Finance
            </a>{' '}
            is <strong>a crypto index & lending protocol</strong> built on
            Polygon PoS chain.
          </span>
        }
        info2={
          <span>
            <strong>
              I built and integrated all smart contracts of the dApp
            </strong>{' '}
            and made{' '}
            <strong>significant contributions to its frontend dashboard</strong>{' '}
            as well, focusing on the simplicity and ease of use.
          </span>
        }
      />
      <ProjectCard
        img={avix}
        title={'Majr Inc.'}
        info={
          <span>
            <a
              href='https://majr.io'
              target='_blank'
              rel='noopener noreferrer'
              className='bold project-card-link'
            >
              Majr
            </a>{' '}
            is a <strong>web3 media company</strong> focused on the video
            content curation and community{' '}
            <strong>digital asset accumulation.</strong>{' '}
          </span>
        }
        info2={
          <span>
            My tasks include{' '}
            <strong>creating tokens, NFTs, governance, treasury and DAO</strong>{' '}
            smart contracts, and everything else web3-related.
          </span>
        }
      />
      <div style={{ marginRight: '-30px' }} />
    </div>
    <Skills />
  </div>
);

export default Projects;
