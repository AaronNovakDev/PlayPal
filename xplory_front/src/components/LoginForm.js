import React,{useState} from 'react'
import { useGlobalState } from '../utils/stateContext'
import { signIn } from '../assets/services/authServices'
import {Card} from 'reactstrap'

  const LoginForm =({history, activateUser})=>{
        const {dispatch} = useGlobalState()
        const initialFormData = {
            email: "",
            password: ""
        }
    
        const [formData, setFormData] = useState(initialFormData)
    
        function handleFormData(e){
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
        }
    
        function handleSubmit(e){
            e.preventDefault()
            signIn(formData)
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
            })
            .catch()
            return history.push("/parks")
        }
    
        return(
            <div className="login-form">
            <Card className='m-5 p-5 w-50 transform'> 
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
                    <input id="btn" type="submit" value="Login" />
                </form>
            </Card>
            </div>
        )
    }
    
    export default LoginForm
    
