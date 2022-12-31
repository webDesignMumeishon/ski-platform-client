import { Outlet } from "react-router-dom"

import ResponsiveDrawer from './Drawer'

const Home = () => {

    return (
        <div>
            <h1>This is Home</h1>
            <ResponsiveDrawer/>
        </div>
    )
}

export default Home