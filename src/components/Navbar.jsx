import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useAuth0();
  return (
    <div className="xyz">
      <h1>
        Weather <span style={{ color: "yellow" }}>Wise</span>
      </h1>
      <h1>Hello {user.name} </h1>
      <Logout />
    </div>
  );
};

export default Navbar;
