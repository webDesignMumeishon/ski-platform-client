import { Outlet } from "react-router-dom";

import { useAppDispatch } from "./redux/hooks";
import { fetchUser } from "./redux/slices/user";
import './App.css';
import Navbar from './components/Navbar'

function App() {
  // check cookie before dispatching  
  const dispatch = useAppDispatch()
  dispatch(fetchUser())
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
