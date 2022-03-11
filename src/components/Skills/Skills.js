import React from 'react'
import './skills.css'
import react from '../../assets/react.png'
import ts from '../../assets/typescript.png'
import web3js from '../../assets/web3_js.png'
import nodejs from '../../assets/nodejs.jpg'
import solidity from '../../assets/solidity.png'
import ipfs from '../../assets/IPFS.png'

const Skills = () => {
  const Skill = ({ img, skillName, radius }) => (
    <div className="skill">
      <img
        src={img}
        alt={skillName}
        width={150}
        height={140}
        className="skill-image"
        style={{
          borderRadius: radius && '5%',
        }}
      />
      <h3 className="skill-title">{skillName}</h3>
    </div>
  )

  return (
    <div className="skills">
      <h1 className="skills-heading">MY SKILLS</h1>
      <div className="border-line" />
      <div className="skills-container">
        <Skill img={react} skillName={'React'} />
        <Skill img={ts} skillName={'TypeScript'} radius />
        <Skill img={web3js} skillName={'Ethers.js & Web3.js'} />
        <Skill img={nodejs} skillName={'Node.js'} />
        <Skill img={solidity} skillName={'Solidity'} />
        <Skill img={ipfs} skillName={'IPFS'} />
      </div>
    </div>
  )
}

export default Skills
