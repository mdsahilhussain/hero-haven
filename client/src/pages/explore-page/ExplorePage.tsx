/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Card, ExploreNavbar} from "../../components";
import "./explore.modules.css";
interface iProps {
  setIsNavbarShow: any;
}
const ExplorePage = (props: iProps) => {
  const { setIsNavbarShow } = props;
  useEffect(() => {
    setIsNavbarShow(false);
  }, [setIsNavbarShow]);
  const [filterData, setFilterData] = useState({
    tools: "",
    stylesheet: "",
  });

  return (
    <React.Fragment>
      <ExploreNavbar setIsNavbarShow={setIsNavbarShow} setFilterData={setFilterData}/>
      <section className="explore___list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </React.Fragment>
  );
};

export default ExplorePage;
