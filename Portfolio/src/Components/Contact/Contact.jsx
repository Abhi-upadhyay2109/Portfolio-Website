import React, { useState } from 'react';
import './Contact.css'
import theme_pattern from '/assets/theme_pattern.svg'
import mail_icon from '/assets/mail_icon.svg'
import location_icon from '/assets/location_icon.svg'
import call_icon from '/assets/call_icon.svg'
import linkdin_icon from '/assets/linkdin_icon.svg'
import github_icon from '/assets/github_icon.svg'
import { ToastContainer, toast } from 'react-toastify'
const my_access_key = import.meta.env.VITE_API_ACCESS_KEY



function Contact() {
  const [submit ,setsubmit] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    formData.append("access_key", my_access_key);
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    
    const loadingToastId = toast.loading("Submitting your message... ⏳", {
      position: "top-center",
      theme: "colored",
      style: {
        background: "#1e3a8a", 
        color: "white", 
        fontWeight: "bold",
      },
    });
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const res = await response.json();
  
      if (!res.success) {
        throw new Error(res.message || "Submission failed");
      }
  
      
      toast.update(loadingToastId, {
        render: "Message submitted successfully! 🎉",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        style: { background: "green" },
      });
  
      event.target.reset();
    } catch (error) {
      console.error("Submission Error:", error.message);
  
      
      toast.update(loadingToastId, {
        render: `Error: ${error.message || "Submission failed. Try again ❌"}`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        style: { background: "red" },
      });
    } finally {
      
      toast.dismiss(loadingToastId,{autoClose: 5000});
    }
  };
  
  
  


  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />  <a  target='_self' href="mailto:panditabhishek9651@gmail.com">Send Email</a>
              
              </div>
              <div className="contact-detail">
                <img src={linkdin_icon} alt="" /> <a target='_self' href="https://www.linkedin.com/in/abhishek-upadhyay-715991260">Linkedin</a> 
              </div>
              <div className="contact-detail">
                <img src={github_icon} alt="" /> <a target='_self' href="https://github.com/Abhi-upadhyay2109"> Git Hub </a>

              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /> <a target='_self' href="tel:+91 9651826737"> Call Me </a>

              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>UttarPradesh , India</p> 
              </div>
          </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
  {/* Name Field */}
  <label htmlFor="name">Your Name</label>
  <input 
    type="text" 
    id="name" 
    name="name" 
    placeholder="Enter Your Name" 
    required 
    autoComplete="name"
  />

  {/* Email Field */}
  <label htmlFor="email">Your Email</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="Enter Your Email" 
    required 
    autoComplete="email"
  />

  {/* Message Field */}
  <label htmlFor="message">Write your message here</label>
  <textarea 
    id="message" 
    name="message" 
    rows="8" 
    placeholder="Enter Your Message" 
    required 
    autoComplete="off"
  ></textarea>

  {/* Submit Button */}
  <button type="submit" className="contact-submit" disabled={submit}>
    Submit Now
  </button>
</form>




        </div>
        <ToastContainer position="top-center" autoClose={5000} theme="colored" pauseOnHover/>
        
    </div>
  )
}

export default Contact