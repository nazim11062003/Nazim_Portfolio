"use client";
import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className="about_main" id="about">
        <Image className="ring" src="/ring.png" width={300} height={300} />
        <div className="about_box">
          <h3 className="opening_about">
            <Image
              className="wave_hand"
              id="opening"
              src="/less.png"
              width={20}
              height={20}
            />
            about
            <Image
              className="wave_hand"
              id="opening"
              src="/greaterrr.png"
              width={20}
              height={20}
            />
          </h3>

          <div className="about_text">
            <h2 className="hi">Hey there! I'm Nazim</h2>
            <br />
            A passionate web developer, UI/UX designer, and coder. With a love
            for technology and a creative mindset, I strive to create stunning
            and user-friendly websites and applications that leave a lasting
            impact. My expertise in web development allows me to bring ideas to
            life, while my skills in UI/UX design ensure a seamless and
            enjoyable user experience. I'm always up for a coding challenge and
            love finding innovative solutions to complex problems.
            <br />
            <br />
            But that's not all! When I'm not busy coding, I'm an avid gamer who
            enjoys exploring virtual worlds and competing with fellow gamers.
            It's a great way to unwind and stay connected with the gaming
            community.
            <br />
            <br />
            During my college days, I had the honor of being the captain of the
            coders club. Leading a team of talented individuals and organizing
            coding competitions was an incredible experience that further fueled
            my passion for technology and collaboration.
            <br />
            <br />
            If you're looking for someone who is not only skilled but also
            dedicated and enthusiastic about their work, I'm your guy! Let's
            connect and discuss how we can bring your digital projects to life.
            Feel free to check out my portfolio to see some of the exciting
            projects I've worked on!"
          </div>
          <h3 className="closing_about">
            <Image
              className="wave_hand"
              id="opening"
              src="/less.png"
              width={20}
              height={20}
            />
            about
            <Image
              className="wave_hand"
              id="slashh"
              src="/slashh.png"
              width={8}
              height={20}
            />
            <Image
              className="wave_hand"
              id="opening"
              src="/greaterrr.png"
              width={20}
              height={20}
            />
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
