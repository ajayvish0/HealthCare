import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  const user = { name: "aja", email: "ajvish@gmail.com", Password: "abc123" };

  return (
    <section className="LoginContainer">
      <div className="Card">
        <h1 className="Heading">
          Welcome to <span>HealthCare</span>
        </h1>
        <p>
          No Account?{" "}
          <Link to="/signup" className="Link">
            signup
          </Link>
        </p>

        <LoginForm user={user} />
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
