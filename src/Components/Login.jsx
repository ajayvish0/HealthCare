import { Link } from "react-router-dom";
import LoginInput from "./LoginInput";

const Login = () => {
  const user = { name: "aja", email: "ajvish@gmail.com", Password: "abc123" };

  return (
    <section className="Login-container">
      <div className="Login-card">
        <h1 className="Login-heading">
          Welcome to <span>HealthCare</span>
        </h1>
        <p>
          No Account?{" "}
          <Link to="/signup" className="Link-login">
            signup
          </Link>
        </p>
        <div className="Login-input">
          <LoginInput user={user} />
        </div>
      </div>
    </section>
  );
};

export default Login;

// antd input boxes --> email , password
// hardcoded users upon successfull check redirect to home route
//logic --> useState for inputs
//navigate to "/"
// it must have redirect with a link
