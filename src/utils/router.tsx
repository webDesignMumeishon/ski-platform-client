import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import Discussion from "../components/Discussion";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Posts, { loader as rootLoader } from "../components/Posts";
import Report from "../components/Report";
import Market from "../components/Market";

export default createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: ":state/:center",
        element: <Home />,
        children: [
          {
            path: "/:state/:center/report",
            element: <Report />,
          },
          {
            path: "/:state/:center/post",
            loader: rootLoader,
            element: <Posts />,
          },
          {
            path: "/:state/:center/post/:postId",
            element: <Discussion />,
          },
          {
            path: "/:state/:center/market",
            element: <Market />,
          }
        ]
      },
    ],
  },
  {
    path: "login",
    element: <Login/>,
  },
]);