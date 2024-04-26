import HomeDefault from "./HomeDefault";
import HomeLogin from "./HomeLogin";
import "./Home.scss";
import { useSelector } from "react-redux";
function Home() {
  const isLogin = useSelector((state) => state.loginReducer);
  return <>{isLogin ? <HomeLogin></HomeLogin> : <HomeDefault></HomeDefault>}</>;
}

export default Home;
