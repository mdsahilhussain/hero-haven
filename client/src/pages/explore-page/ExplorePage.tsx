/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { ExploreNavbar } from "../../components";

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
      <div
        style={{ backgroundColor: "#bfdbf7", width: "100%", height: "20vh" }}
      ></div>
    </React.Fragment>
  );
};

export default ExplorePage;
