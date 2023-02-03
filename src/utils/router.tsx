import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Discussion from '../components/Discussion'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Posts, { loader as postsLoader } from '../components/Posts'
import Resorts, { loader as resortLoader } from '../components/Resorts'
import Report from '../components/Report'
import Market from '../components/Market'
import Restaurants from '../components/Restaurants'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: userLoader,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'resorts/',
        element: <Resorts />,
        loader: resortLoader
      },
      {
        path: ':state/:center',
        element: <Home />,
        children: [
          {
            path: '/:state/:center/report',
            element: <Report />
          },
          {
            path: '/:state/:center/post',
            loader: postsLoader,
            element: <Posts />
          },
          {
            path: '/:state/:center/post/:postId',
            element: <Discussion />
          },
          {
            path: '/:state/:center/market',
            element: <Market />
          },
          {
            path: '/:state/:center/restaurants',
            element: <Restaurants />
          }
        ]
      }
    ]
  }
])
