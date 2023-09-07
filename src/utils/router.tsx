import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Posts, { loader as postsLoader } from '../components/Posts'
import Resorts, { loader as resortLoader } from '../components/Resorts'
import Discussion, { loader as singlePostLoader } from '../components/Discussion'
import Report from '../components/Report'
import Market from '../components/Market'
import Restaurants from '../components/Restaurants'
import CreatePost from '../components/CreatePost'
import BuddyRiding from '../components/Buddy'
import Main from '../components/Main'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
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
        path: ':state/:town',
        element: <Home />,
        children: [
          {
            path: '/:state/:town/report',
            element: <Report />
          },
          {
            path: '/:state/:town/post',
            loader: postsLoader,
            element: <Posts />
          },
          {
            path: '/:state/:town/post/:postId',
            loader: singlePostLoader,
            element: <Discussion />
          },
          {
            path: '/:state/:town/post/new/create',
            element: <CreatePost/>
          },
          {
            path: '/:state/:town/market',
            element: <Market />
          },
          {
            path: '/:state/:town/restaurants',
            element: <Restaurants />
          },
          {
            path: '/:state/:town/buddy-riding',
            element: <BuddyRiding />
          }
        ]
      }
    ]
  }
])
