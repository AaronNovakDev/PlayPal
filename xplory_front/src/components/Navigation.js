
import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'

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
           <Link to="/home">Home</Link>
           <Link to="/about">About</Link>
            {loggedInUser ? 
                <>
                    {loggedInUser}
                     <Link to ="/ParkForm">Create Park</Link>
                     <Link to ="/Parks">Park</Link>
					 <Link to="/friends">Friends</Link>
					 <Link to="/filter">Park Filter</Link>
                     <Link to="/parks" onClick={logout}>Logout</Link>
                </> 
            :   <>
                     <Link to="/LoginForm">Login</Link>
                     <Link to="/signup">Sign up</Link>
                </>
            }
        </div>
    )
}

export default Navigation