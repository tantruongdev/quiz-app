import { NavLink } from "react-router-dom";

function AccountLogin({ isNavLinkActive }) {
  return (
    <>
      <NavLink to="/logout" className={isNavLinkActive}>
        Logout
      </NavLink>
    </>
  );
}

export default AccountLogin;
