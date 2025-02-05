import React from 'react'
import './About.css'
import theme_pattern from '/assets/theme_pattern.svg'

const profile = "/assets/profile.jpg";

const About = () => {
  
  return (
    <div className='about' id='about'>
       <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
       </div>
       <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="profileImage" className='profile-image'/>
        </div>
        <div className="about-right">
          <div className="about-para">
          <h2>Hi, I'm Abhishek Upadhyay 👋</h2>
            <p>I’m a detail-oriented Full-Stack Developer with a passion for building impactful solutions.
Always eager to create things that make a difference.
</p>
            <p> Open to collaboration on Full-Stack Web projects</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Talwind CSS </p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>React JS </p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Express</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Node js</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>MongoDB </p><hr style={{width:"80%"}}/></div>
          </div>
        </div>
       </div>
    </div>
    

  )
}

export default About