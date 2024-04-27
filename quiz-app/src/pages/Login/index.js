import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/userServices";
import "./Login.scss";
import { setCookie } from "../../helpers/cookie";
import { checkLogin } from "../../actions/login";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alert(
      "If you're unable to log in, please wait a few minutes for the server to come back online. Thank you."
    );
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const fetchApi = async () => {
      const response = await login(email, password);
      if (response.length > 0) {
        setCookie("id", response[0].id, 1);
        setCookie("fullName", response[0].fullName, 1);
        setCookie("email", response[0].email, 1);
        setCookie("token", response[0].token, 1);
        dispatch(checkLogin(true));
        navigate("/");
      } else {
        alert("Vui lòng nhập lại email hoặc mật khẩu!");
      }
    };
    fetchApi();
  };
  return (
    <>
      <div className="login">
        <h1 className="login__title-head">Login Quiz</h1>
        <h3>Test Account: email: admin password: 123456</h3>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__item">
            {/* <label htmlFor="email">Email: </label> */}
            <input
              type="text"
              id="email"
              placeholder="Enter your email...:admin"
            ></input>
          </div>
          <div className="login__item">
            {/* <label htmlFor="password">Password: </label> */}
            <input
              type="password"
              id="password"
              placeholder="Enter your password...: 123456"
            ></input>
          </div>

          <div className="login__item">
            <button className="login__button">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
