import { Link } from "react-router-dom";
import SignupForm from "../Components/SignupForm";

const Signup = () => {
  return (
    <section className="Container">
      <div className="Card">
        <h1 className="Heading">
          Create a <span>New Account</span>
        </h1>
        <p>
          Have an account?{" "}
          <Link to="/login" className="Link">
            Log in now
          </Link>
        </p>

        <SignupForm />
      </div>
    </section>
  );
};

export default Signup;

// name, password, age , email , phone number , gender
// antd fields
// useState for grbbing information
// on success redirect to home route
