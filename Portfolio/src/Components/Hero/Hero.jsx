import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ToastContainer, toast } from 'react-toastify';
import { ReactTyped } from "react-typed";

const resume = `${import.meta.env.BASE_URL}/Resume.pdf`;  
const profile = `${import.meta.env.BASE_URL}/profile.jpg`;

const Hero = () => {
  const handleDownload = (event) => {
    event.preventDefault();

    const confirmDownload = window.confirm("Are you sure you want to download the resume?");
    
    if (confirmDownload) {
      const link = document.createElement("a");
      link.href = resume;
      link.download = "Abhishek_Upadhyay_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Downloaded successfully 📥", { position: "top-center" });
    } else {
      toast.error("Download cancelled ❌", { position: "top-center" });
    }
  };

  return (
    <div className='hero' id='home'>
      <div className='profile-container'>
        <img src={profile} alt="Profile" className='profile-image' />
      </div>

      <h1>
        <span>Hi, I'm Abhishek Upadhyay, <br /> </span>
        <ReactTyped
          strings={["Full-Stack Developer", "Problem Solver", "Passionate Coder"]}
          typeSpeed={100}  
          backSpeed={120}   
          loop={true}
        />
      </h1>

      <p>
        I have a keen eye for detail and a deep passion for building innovative solutions that make a real impact. 
        Crafting software that transforms ideas into reality is what drives me.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={80} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>

        <div className="hero-resume">
          <a href="#" onClick={handleDownload}>
            My Resume
          </a>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1500} theme="colored" pauseOnHover/>
    </div>
  );
}

export default Hero;
