import React,{useState} from 'react'
import { useGlobalState } from '../utils/stateContext'
import { signIn } from '../assets/services/authServices'

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
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
    
    export default LoginForm
    
