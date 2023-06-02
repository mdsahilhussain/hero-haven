import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./features.models.css";
import featuresData from "./features.json";

gsap.registerPlugin(ScrollTrigger);

interface itemType {
  _id: number;
  title: string | null;
  description: string;
  image: string | null;
}

const Features = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component = useRef<HTMLDivElement | any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slider = useRef<HTMLDivElement | any>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".features___content--item");
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
    <section className="features" ref={component}>
      <div className="features___banner">
        <h3>
          Unleash the <span>Power</span> of Hero Haven
        </h3>
      </div>
      <div className="features___content" ref={slider}>
        {featuresData.map((item: itemType, index: number) => (
          <div className="features___content--item" key={index}>
            <div className="features___content--item___detail">
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
      <div style={{ height: "100vh" }}></div>
    </section>
  );
};

export default Features;
