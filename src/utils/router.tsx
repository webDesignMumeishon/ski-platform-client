import { createBrowserRouter } from "react-router-dom";
import axios from "axios";


import App from "../App";
import Discussion from "../components/Discussion";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Posts, { loader as rootLoader } from "../components/Posts";
import Resorts, {loader as resortLoader} from "../components/Resorts";
import Report from "../components/Report";
import Market from "../components/Market";


export async function userLoader(context: any) : Promise<any> {
  try{
    const result = await axios.get('http://localhost:4000/user/me/personal',
      { 
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
      }
    )
    console.log(result)
    return result
  }
  catch(err){
    console.error(err)
    return ''
  }

}

export default createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    loader: userLoader,
    children: [
      {
        path: "resorts/",
        element: <Resorts />,
        loader: resortLoader,
      },
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
          },

        ]
      },
    ],
  },
  {
    path: "login",
    element: <Login/>,
  },
]);