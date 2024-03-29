import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { checkExits, register } from "../../services/usersService";
function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const checkExitsEmail = await checkExits("email", email);

    if (checkExitsEmail.length > 0) {
      alert("Email này đã tồn tại!");
    } else {
      const options = {
        fullName: fullName,
        email: email,
        password: password,
        token: generateToken(),
      };

      const response = await register(options);
      // console.log(response);
      if (response) {
        navigate("/login");
      } else {
        alert("Đăng ký thất bại, vui lòng thử lại!");
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <input type="fullName" placeholder="Nhập họ tên"></input>
        </div>
        <div>
          <input type="email" placeholder="Nhập email"></input>
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu"></input>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
