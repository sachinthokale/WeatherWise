import { useAuth0 } from "@auth0/auth0-react";
import "./Logout.css";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="logout-btn"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      LOGOUT
    </button>
  );
};

export default Logout;
