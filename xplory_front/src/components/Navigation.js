import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navigation =()=>{

    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    function logout(e){
        e.preventDefault()
        console.log("logout")
        sessionStorage.clear()
        dispatch({
            type: "setLoggedInUser",
            data: null
        })
        dispatch({
            type: "setToken",
            data: null
        })

    }

    return(
        <div>
        <Appbar>
			<Toolbar>
				<Typography variant="h6" style= {{ flexGrow: 1 }}>XPLORY</Typography>
        
            <Button color="inherit"><Link to="/parks">Home</Link></Button>
            <Button color="inherit"><Link to="/about">About</Link></Button>
            {loggedInUser ? 
                <>
                    {loggedInUser}
                     <Button color="inherit"><Link to="/newpark">Post a new park!</Link></Button>
                     <Button color="inherit"><Link to="/parks" onClick={logout}>Logout</Link></Button>
					 <Button color="inherit"><Link to="/friends">Friends</Link></Button>
					 <Button color="inherit"><Link to="/filter">Filter</Link></Button>
                </> 
            :   <>
                     <Button color="inherit"><Link to="/LoginForm">Login</Link></Button>
                     <Button color="inherit"><Link to="/signup">Sign up</Link></Button>
                </>
            }
            </Toolbar>
            </Appbar>
        </div>
    )
}

export default Navigation