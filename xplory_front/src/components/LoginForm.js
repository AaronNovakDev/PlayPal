import React,{useState} from 'react'
<<<<<<< HEAD
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
=======

import {Form,FormGroup,Input,Card,Button} from 'reactstrap'

import axios from 'axios'


const LoginForm = (props) => {

    const [form, setForm] = useState({email:'',password:''});

    const onChange = (e) => setForm({...form,[e.target.name]:e.target.value})

    const {email,password} = form;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({form})
    }
    
    const login = async (form) => {
        try {
            const res = await axios.post('',form)
        } catch (err) {
            
>>>>>>> origin/not-sure
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
<<<<<<< HEAD
    
    export default LoginForm
    
=======
    return <Card className='m-5 p-5 w-50 transform'> <Form onSubmit={onSubmit} >
    <FormGroup>
    <Input type='email' name='email' placeholder='Enter Email Address' value={email} onChange={onChange} />
    </FormGroup>
    
    <FormGroup>
    <Input type='password' name='password' placeholder='Enter Password' value={password} onChange={onChange} />
    </FormGroup>

    <FormGroup>
    <Button className='w-50' color='primary' type='submit' >Login</Button>
    </FormGroup>
    </Form>
    </Card>
}
export default LoginForm
>>>>>>> origin/not-sure
