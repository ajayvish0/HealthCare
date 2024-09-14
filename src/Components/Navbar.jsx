import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Avatar size={34} icon={<UserOutlined />} />
        <p>Ajay </p>
      </div>
      <ul>
        <li>
          <Link to="/services"> Services</Link>
        </li>
        <li>
          <Link to="/expertices"> Expertices</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
