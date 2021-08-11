import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { createPark } from '../assets/services/parkServices'
import {Card} from 'reactstrap'

const ParkForm =({history})=>{
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    const initialFormData = {
        title: "",
        description: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        createPark(formData)
            .then((park) => {
                dispatch({
                    type: "addPark",
                    data: park 
                  })
                
            })
            .catch(error => {
                console.log(error)})
        return history.push("/Park")
    }


    return(
        <div className="park-form">
        <Card className='m-5 p-5 w-50 transform'>
            {loggedInUser?
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">Add a new park here,  {loggedInUser}</label>
                    <input type="text" name="title" id="title" placeholder="Park Name" value={formData.title} onChange={handleFormData}/>
                    <input type="text" name="description" id="description" placeholder="Description" value={formData.description} onChange={handleFormData}/>
                    <input id="btn" type="submit" value="Post" />
                </form>
            : 
                <p>Sorry, you will need to log in first to do that.</p>
            }
          </Card>  
        </div>
    )
}

export default ParkForm