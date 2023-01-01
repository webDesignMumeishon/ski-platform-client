import { Grid } from "@mui/material"
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <Grid className="navbar-container" container alignItems='center' justifyContent={'space-between'}>
            <Grid item lg={1} style={{marginRight: '10px'}}>
                <p >ICON</p>
            </Grid>

            <Grid xs={8} md={8} sm={7}>
                <Grid container className="nav-bar-wrapper">
                    <Grid xs={4} className='search-input'>
                        <label htmlFor="Search">
                            <input id="Search" placeholder="Search"/>
                        </label>
                    </Grid>
                    <Grid>
                        <Link to='/'>Home</Link>
                    </Grid>
                    <Grid>
                        <Link to='/'>Resorts</Link>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container lg={1} md={1} sm={2}>
                <Grid>
                    <Link to='/login'>Login</Link>
                </Grid>
            </Grid>


        </Grid>

    )
}

export default Navbar