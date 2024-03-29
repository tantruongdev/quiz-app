import { Navigate, Outlet } from "react-router-dom";

function PrivateRouters() {
  const isLogin = true;
  return <>{isLogin ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>}</>;
}

export default PrivateRouters;
