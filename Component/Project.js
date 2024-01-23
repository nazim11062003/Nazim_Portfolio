"use client";
import React from "react";
import Link from "next/link";
const Project = () => {
  return (
    <>
      <div className="project_main" id="project">
        <h1 className="project_head">Projects</h1>
        <div className="webd_pro">
          <Link href="/Website" className="web_head">Websites</Link>
        </div>
        <div className="design_pro">
          <Link href='/Design' className="design_head">Designs</Link>
        </div>
      </div>
    </>
  );
};

export default Project;
