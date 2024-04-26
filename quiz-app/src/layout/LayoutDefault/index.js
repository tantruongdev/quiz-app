import { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import Account from "../../components/Account";
import { getCookie } from "../../helpers/cookie";
import { useDispatch, useSelector } from "react-redux";
import { checkUserExist } from "../../services/userServices";
import { checkLogin } from "../../actions/login";

function LayoutDefault() {
  const token = getCookie("token");
  const isLogin = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      const fetchApi = async () => {
        const response = await checkUserExist("token", token);
        if (response.length > 0) {
          dispatch(checkLogin(true));
        }
      };
      fetchApi();
    }
  }, []);
  const isNavLinkActive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  };

  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">
            <Link to="/">
              <img src="" alt=""></img>
              <span>Quiz</span>
            </Link>
          </div>
          {token && (
            <div className="layout-default__menu">
              <ul className="menu">
                <li>
                  <NavLink to="/" className={isNavLinkActive}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/topic" className={isNavLinkActive}>
                    Topic
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/answers" className={isNavLinkActive}>
                    Answers
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          <div className="layout-default__account">
            <Account isLogin={isLogin}></Account>
            {/* {isLogin ? () : (

            )} */}
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet></Outlet>
        </main>
        <footer className="layout-default__footer">
          Copyright @ 2024 by Tan Truong
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
