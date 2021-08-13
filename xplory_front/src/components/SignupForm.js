import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { signUp } from '../assets/services/authServices'
import {Card} from 'reactstrap'

const SignupForm =({history})=>{
    const {dispatch} = useGlobalState()
    console.log(history)
    const initialFormData = {
        username: "",
        email: "",
        password: "", 
        password_confirmation: ""
    }
    const [error, setError] = useState("")
    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        signUp(formData)
        .then(({username, jwt}) => {
            sessionStorage.setItem("username", username)
            sessionStorage.setItem("token", jwt)
            dispatch({
                type: "setLoggedInUser",
                data: username
            })
            dispatch({
                type: "setToken",
                data: jwt
            })
            return history.push("/parks")
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
        

    }

    return(
        <div className="signup-form">
            <Card className='g-4 transform'> 
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Username:</label>
                <input type="text" name="username" id="username" placeholder="Enter Username" value={formData.username} onChange={handleFormData}/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleFormData}/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleFormData}/>
                <label htmlFor="password">Confirm Password: </label>
                <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Re-enter password" value={formData.password_confirmation} onChange={handleFormData}/>
                <input id="btn" type="submit" value="Sign up" data-cy="signup-button" />
            </form>
            </Card>
        </div>
    )
}

export default SignupForm