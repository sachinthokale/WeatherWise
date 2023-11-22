import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home";
import "./Login.css";

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  console.log(user);

  return (
    <div className="login-page">
      {isAuthenticated ? (
        <Home />
      ) : (
        <div className="login-box">
          <h1>
            Weather <span style={{ color: "yellow" }}>Wise</span>
          </h1>
          <p>Navigate Your Day with Forecast Precision</p>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Login;
