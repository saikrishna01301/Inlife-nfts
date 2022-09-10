import "./Navigation.scss";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-left">
          <Link className="nav-link app-name" to="/">
            inlife
          </Link>
        </div>
        <div className="nav-middle">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/live">
            Live Action
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
          <Link className="nav-link" to="/community">
            Community
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="nav-right">
          <Link className="nav-link auth" to="/signin">
            Sign in
          </Link>
          <Link className="nav-link auth signup" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
