import "./navbar.modules.css";
import Button from "../../ui-components/button/Button";
import { IoNotificationsSharp, IoNotificationsOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav>
      <img src="" alt="logo-image" />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Contributor</li>
      </ul>
      <div className="nav___button--controller">
        <Button title="Explore" />
        <IoNotificationsOutline
          style={{ marginLeft: "0.5em", fontSize: "1.5rem" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
