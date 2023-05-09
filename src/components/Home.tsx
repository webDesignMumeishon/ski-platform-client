import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import ResponsiveDrawer from './Drawer'
import { useAppDispatch } from "../redux/hooks";
import { fetchResort } from "../redux/slices/resort";
import { TResortRequest } from '../interfaces/resort'
import { ResortRequest } from "../request/Resort";

const Home = (): JSX.Element => {
  const params = useParams<TResortRequest>();

  const dispatch = useAppDispatch()
  useEffect(() => {
      if(params.state !== undefined && params.town !== undefined ){
          const resort = new ResortRequest(params.state, params.town)
          dispatch(fetchResort(resort))
      }
  },[])


  return <ResponsiveDrawer />
}

export default Home
