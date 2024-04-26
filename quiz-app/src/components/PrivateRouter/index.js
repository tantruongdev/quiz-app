import { Outlet, Navigate } from "react-router-dom";

function PrivateRouters() {
  const isLogin = true;
  return <>{isLogin ? <Outlet></Outlet> : <Navigate to="/"></Navigate>}</>;
}

export default PrivateRouters;
