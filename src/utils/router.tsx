import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Discussion from "../components/Discussion";
import ErrorPage from "../components/ErrorPage";
import Posts from "../components/Posts";

export default createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "cities/",
        element: <Posts />,
      },
    ],
  },
  {
    path: "cities/post/:postId",
    element: <Discussion />,
  },
]);