/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { ExploreNavbar, FilterSection } from "../../components";
import "./explore.modules.css";
interface iProps {
  setIsNavbarShow: any;
}
const ExplorePage = (props: iProps) => {
  const { setIsNavbarShow } = props;
  useEffect(() => {
    setIsNavbarShow(false);
  }, [setIsNavbarShow]);

  return (
    <React.Fragment>
      <ExploreNavbar setIsNavbarShow={setIsNavbarShow} />
      <section className="explore__filter">
        <div className="explore__filter___container">
          <FilterSection />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ExplorePage;
