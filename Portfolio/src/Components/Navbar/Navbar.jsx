import React, { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '/nav_underline.svg';
import "./Navbar.css";
import menu_open from '/menu_open.svg';
import menu_close from '/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"; 
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";  
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) { 
        setScroll(window.scrollY > 50);
      } else {
        setScroll(false); 
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);  

   
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${scroll ? "scrolled" : ""}`}>
      <div className="name-logo">
        <h1>AbhisheK</h1>
      </div>

      
      {isMobile && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="Open Menu"
          className="nav-mob-open"
        />
      )}

      
      <ul ref={menuRef} className="nav-menu">
       
        {isMobile && (
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="Close Menu"
            className="nav-mob-close"
          />
        )}

        <li>
          <AnchorLink
            className="anchor-link"
            offset={80}
            href="#home"
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={80}
            href="#about"
            onClick={() => setMenu("about")}
          >
            About Me
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={80}
            href="#portfolio"
            onClick={() => setMenu("portfolio")}
          >
            Portfolio
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={80}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={80}
          href="#contact"
          onClick={() => setMenu("contact")}
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
