/* eslint-disable @typescript-eslint/no-explicit-any */
import "./navbar.modules.css";
import { Button } from "../../ui-components/button/Button";
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
          <Button title="Explore" style={{}} />
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
  const { setIsNavbarShow } = props;
  const navigate = useNavigate();

  const handleBack = () => {
    setIsNavbarShow(true);
    navigate("/");
  };
  return (
    <nav className="glassmorphism">
      <img
        src=""
        alt="logo-image"
        onClick={handleBack}
        style={{ cursor: "pointer" }}
      />

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
  );
};
