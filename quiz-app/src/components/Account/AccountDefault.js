import { NavLink } from "react-router-dom";

function AccountDefault({ isNavLinkActive }) {
  return (
    <>
      <div className="account">
        <NavLink to="/login" className={isNavLinkActive}>
          Login
        </NavLink>
        <NavLink to="/register" className={isNavLinkActive}>
          Register
        </NavLink>
      </div>
    </>
  );
}

export default AccountDefault;
