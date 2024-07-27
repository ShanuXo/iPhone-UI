import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useGSAP(() => {
    //gsap.to() -> it expects an id along with the property which you want to set
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y:-50,delay: 2 });

  }, []);
 
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro Max
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
       id="cta"
       className="flex flex-col items-center opacity-0
       translate-y-20"
      >
      <a href="#highlights" className="btn">Buy</a>
      <p className="font-normal text-xl"> From INR 3599*/month or INR 1,60,000</p>
      </div>
    </section>
  );
};

export default Hero;
