import { useSelector } from "react-redux";
import { getCookie } from "../../helpers/cookie";
import "./LayoutDefault.scss";
import { NavLink, Outlet } from "react-router-dom";
function LayoutDefault() {
  const token = getCookie("token");
  const isLogin = useSelector((state) => state.loginReducer);

  // console.log(token);
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">Quiz</div>

          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {token && (
                <>
                  <li>
                    <NavLink to="/topic">Topic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/answers">Answers</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="layout-default__account">
            {token ? (
              <>
                <NavLink to="/logout">Đăng xuất</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">Đăng nhập</NavLink>
                <NavLink to="/register">Đăng ký</NavLink>
              </>
            )}
          </div>
        </header>
      </div>
      <main className="layout-default__main">
        <Outlet></Outlet>
      </main>
      <footer className="layout-default__footer">Coryright @ 2023</footer>
    </>
  );
}

export default LayoutDefault;
