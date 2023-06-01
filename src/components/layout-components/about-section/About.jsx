import React, { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./about.models.css";
import aboutData from "./aboutDetails.data.json";

// interface ImageData {
//   _id: number;
//   cardId: string;
//   title: string;
//   description: string;
//   image: string | null;
// }

const About = () => {
  // const component = useRef<HTMLDivElement>();
  // const slider = useRef<HTMLDivElement>();

  const component = useRef();
  const slider = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".about___content--item");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <section className="about" ref={component}>
      <div className="about___banner">
        <h3>
          Unleash the <span>Power</span> of Hero Haven
        </h3>
      </div>
      <div className="about___content" ref={slider}>
        {aboutData.map((item, index) => (
          <div className="about___content--item" key={index}>
            <div className="about___content--item___detail">
              <h1>
                <span>{item.title}</span>
              </h1>
              <p>{item.description}</p>
            </div>
            <img
              src={`https://drive.google.com/uc?export=view&id=${item?.image}`}
              alt={item.title}
            />
          </div>
        ))}
      </div>
      <div style={{height:"100vh"}}></div>
    </section>
  );
};

export default About;
