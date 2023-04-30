import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux'

import './App.css';
import store from './store/index'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
