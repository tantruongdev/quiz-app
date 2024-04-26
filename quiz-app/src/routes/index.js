import PrivateRouters from "../components/PrivateRouter";
import LayoutDefault from "../layout/LayoutDefault";
import Answers from "../pages/Answers";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Quiz from "../pages/Quiz";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topic from "../pages/Topic";

const routes = [
  {
    path: "/",
    element: <LayoutDefault></LayoutDefault>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
      {
        element: <PrivateRouters></PrivateRouters>,
        children: [
          {
            path: "answers",
            element: <Answers></Answers>,
          },
          {
            path: "logout",
            element: <Logout></Logout>,
          },
          {
            path: "quiz/:id",
            element: <Quiz></Quiz>,
          },
          {
            path: "result/:id",
            element: <Result></Result>,
          },
          {
            path: "topic",
            element: <Topic></Topic>,
          },
        ],
      },
    ],
  },
];

export default routes;
