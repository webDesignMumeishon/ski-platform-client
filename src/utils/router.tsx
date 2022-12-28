import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Discussion from "../components/Discussion";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Posts, { loader as rootLoader } from "../components/Posts";

export default createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "cities/",
        loader: rootLoader,
        element: <Posts />,
      },
    ],
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "cities/post/:postId",
    element: <Discussion />,
  },
]);