import "./navbar.modules.css";
import { Button } from "../../ui-components/button/Button";
import { IoNotificationsSharp, IoNotificationsOutline } from "react-icons/io5";
const Navbar = () => {
  const isMessage = true;
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
        {isMessage ? (
          <IoNotificationsOutline className="bell" />
        ) : (
          <IoNotificationsSharp className="bell" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;