import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./about.models.css";
import aboutData from "./aboutDetails.data.json";

interface ImageData {
  _id: number;
  cardId: string;
  title: string;
  description: string;
  image: string | null;
}

const About = () => {
  const main = useRef();
  gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   const ctx = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: main.current,
  //       start: "38% 0%",
  //       end: "100% 50%",
  //       scrub: 2,
  //       pin: true,
  //       markers: true,
  //     },
  //   });

  //   ctx.("#cardOne",{
  //     top:"-7%"
  //   },'a')
  //   return () => ctx.revert();
  // }, []);
  return (
    <section className="about">
      <h3>
        Unleash the <span>Power</span> of Hero Haven
      </h3>
      <div className="about___content" >
        {aboutData.map((item: ImageData, index: number) => (
          <div id={item.cardId} className="about___content--item" key={index}>
            <img
              src={`https://drive.google.com/uc?export=view&id=${item?.image}`}
            />
            <div className="about___content--item___detail">
              <h2>
                <span>{item.title}</span>
              </h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
