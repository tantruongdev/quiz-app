import PrivateRouters from "../components/privateRouters";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Answers from "../pages/Answers";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Topic from "../pages/Topic";
import Logout from "../pages/Logout";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault></LayoutDefault>,
    children: [
      {
        path: "/",
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
        path: "logout",
        element: <Logout></Logout>,
      },
      {
        element: <PrivateRouters></PrivateRouters>,
        children: [
          {
            path: "answers",
            element: <Answers></Answers>,
          },
          {
            path: "quiz/:id",
            element: <Quiz></Quiz>,
          },
          {
            path: "result",
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
