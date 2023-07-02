/* eslint-disable @typescript-eslint/no-explicit-any */
import "./navbar.modules.css";
import { Button } from "../../ui-components/button/Button";
import {
  IoNotificationsSharp,
  IoNotificationsOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";

const Navbar = () => {
  const isMessage = true;
  return (
    <nav className="glassmorphism">
      <img src="" alt="logo-image" />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Contributor</li>
      </ul>
      <div className="nav___button--controller">
        <Button title="Explore" style={{}} />
        {isMessage ? (
          <IoNotificationsOutline className="bell" />
        ) : (
          <IoNotificationsSharp className="bell" />
        )}
        <IoPersonOutline />
      </div>
    </nav>
  );
};

export default Navbar;
