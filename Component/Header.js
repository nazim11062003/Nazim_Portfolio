"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import About from "@/Component/About";
const Header = () => {
  const scroll2El = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: 'smooth',
    });
  };

const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }


  const scroll3El = elID3 => {
    window.scrollTo({
      top: document.getElementById(elID3).offsetTop - 60,
      behavior: 'smooth',
    });
  };

const onBtnClick3 = (e3) => {
    e3.preventDefault();
    const goto = e3.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

  const scroll4El = elID4 => {
    window.scrollTo({
      top: document.getElementById(elID4).offsetTop - 50,
      behavior: 'smooth',
    });
  };

const onBtnClick4 = (e4) => {
    e4.preventDefault();
    const goto = e4.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

  return (
    <>
      <div className="nav" id="navbar">
        <div className="nav_left">
          <h4 className="name">
            Mohammad Nazim Husain{" "}
            <Image className="flag" src="/flag.png" width={25} height={25} />
          </h4>
        </div>

        <div className="nav_right">
          <a href="/Nazims_Resume.pdf" className="nav_right_items">
            Download Resume
          </a>
          <a goto="project" onClick={onBtnClick4} className="nav_right_items">Projects</a>
          <a goto="about" onClick={onBtnClick3} className="nav_right_items">About me</a>
          <button goto="contact" onClick={onBtnClick} className="connect">Let's Connect</button>
        </div>
      </div>
    </>
  );
};
export default Header;
