import { useNavigate } from "react-router-dom";
import { checkUserExist, register } from "../../services/userServices";
import { generateToken } from "../../helpers/generateToken";
import "./Register.scss";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const fetchApi = async () => {
      const response = await checkUserExist("email", email);
      if (response.length > 0) {
        alert("Email đã tồn tại vui lòng nhập email khác!");
      } else {
        const info = {
          fullName: fullName,
          email: email,
          password: password,
          token: generateToken(),
        };

        const response = await register(info);
        if (Object.keys(response).length > 0) {
          alert("Đăng ký tài khoản thành công. Vui lòng đăng nhập!");
          navigate("/login");
        } else {
          alert("Đăng ký tài khoản không thành công!");
        }
      }
    };
    fetchApi();
  };
  return (
    <>
      <div className="register">
        <h1 className="register__title-head">Register</h1>
        <form onSubmit={handleSubmit} className="register__form">
          <div className="register__item">
            {/* <label htmlFor="email">Email: </label> */}
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name..."
            ></input>
          </div>
          <div className="register__item">
            {/* <label htmlFor="email">Email: </label> */}
            <input
              type="text"
              id="email"
              placeholder="Enter your email..."
            ></input>
          </div>
          <div className="register__item">
            {/* <label htmlFor="password">Password: </label> */}
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
            ></input>
          </div>

          <div className="register__item">
            <button className="register__button">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
