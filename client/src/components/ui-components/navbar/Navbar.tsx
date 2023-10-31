/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./navbar.modules.css";
import { Button } from "../../ui-components/button/Button";
import FilterSection from "../../layout-components/filter-section/FilterSection";
import { Link, useNavigate } from "react-router-dom";

import {
  IoNotificationsSharp,
  IoNotificationsOutline,
  IoPerson,
  IoSearchOutline,
  IoPersonOutline,
  IoCloseOutline,
} from "react-icons/io5";

interface iProps {
  setIsNavbarShow: any;
  setFilterData:any;
}

export const Navbar = () => {
  const isMessage = true;

  return (
    <nav className="glassmorphism">
      <Link to="/">
        <img src="" alt="logo-image" />
      </Link>

      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Contributor</li>
      </ul>
      <div className="nav___button--controller">
        <Link to="/search">
          <Button title="Explore" style={{fontSize:".8rem"}} />
        </Link>
        {isMessage ? (
          <IoNotificationsOutline className="bell" />
        ) : (
          <IoNotificationsSharp className="bell" />
        )}
        <Link to="/login">
          <IoPersonOutline />
        </Link>
      </div>
    </nav>
  );
};

export const ExploreNavbar = (props: iProps) => {
  const isMessage = true;
  const isTabSearch = false;
  const { setIsNavbarShow, setFilterData } = props;
  const navigate = useNavigate();

  const handleBack = () => {
    setIsNavbarShow(true);
    navigate("/");
  };
  return (
      <section className="nav___explore">
      <nav>
      <img
        src=""
        alt="logo-image"
        onClick={handleBack}
        style={{ cursor: "pointer" }} />

      <div className="nav___button--controller">
        <div className="nav___button--controller___input-field">
          <IoSearchOutline />
          <input type="text" placeholder="Search" />
          {isTabSearch && <IoCloseOutline />}
        </div>
        {isMessage ? (
          <IoNotificationsOutline className="bell" />
        ) : (
          <IoNotificationsSharp className="bell" />
        )}
        <Link to="/login">
          <IoPersonOutline />
        </Link>
      </div>
    </nav>
      <FilterSection setFilterData={setFilterData} />
      </section>
  );
};
