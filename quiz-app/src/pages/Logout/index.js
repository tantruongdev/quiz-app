import { useNavigate } from "react-router";
import { deleteAllCookies } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin(false));
    deleteAllCookies();
    navigate("/");
  }, []);
  return <></>;
}

export default Logout;
