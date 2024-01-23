"use client";
import React from "react";
import Image from "next/image";
import Header from "@/Component/Header";
const Home = () => {
  return (
    <>
      <div className="home_main">
        <Header />
        <p className="home_name">
          <Image className="wave_hand" src="/less.png" width={30} height={30} />{" "}
          <Image className="wave_hand" src="/wave.png" width={30} height={30} />{" "}
          Hi,I'm Nazim and I'm a{" "}
          <Image className="wave_hand" id="slash_home" src="/slashh.png" width={10} height={30} />{" "}
          <Image className="wave_hand" src="/greaterrr.png" width={30} height={30} />
        </p>
        <h1 className="webdev">Web Developer & UI/UX Designer</h1>
        {/* <h1 className="designer">& UI/UX Designer</h1> */}
        <Image className="char3d" src="/3dchar.png" width={300} height={484}/>
      </div>
    </>
  );
};

export default Home;
