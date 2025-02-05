import React, { useState } from 'react';
import user_icon from '/user_icon.svg';
import { ToastContainer, toast } from 'react-toastify'



import './Footer.css';


function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return toast("Please enter a valid email.");
    toast.success(`Subscribed successfully with ${email}`);
    setEmail(""); 
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>AbhisheK</h1>
          <p>
            I am a Full-Stack Software Engineer from India. <br />
            Passionate Coder | Problem Solver | Tech Enthusiast | Full-Stack Developer
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input 
              type="email" 
              placeholder="Enter Your Email"
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © {new Date().getFullYear()} Abhishek Upadhyay. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
         
        </div>
      </div>
      
        <ToastContainer position="top-center" autoClose={1500}/>

    </div>
  )
}

export default Footer;
