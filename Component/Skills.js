"use client";
import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <>
      <div className="skill_main">
        <div className="container1">
          <div class="container">
            <div class="card"><Image className="skill_img" src="/html.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/css.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/javascript.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/react.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/nextjs.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/node.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/tailwind.png" width={70} height={70}/></div>
          </div>
        </div>

        <div className="container2">
          <div class="container">
            <div class="card"><Image className="skill_img" src="/java.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/python.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/figma.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/c.png" width={70} height={70}/></div>
          </div>

          <div class="container">
            <div class="card"><Image className="skill_img" src="/framer.png" width={70} height={70}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
