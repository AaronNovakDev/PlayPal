import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { createPark } from '../services/parkServices'

const ParkForm =({history})=>{
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    const initialFormData = {
        m_text: ""
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
        <div>
            {loggedInUser?
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">Add a Park here, friend! {loggedInUser}?</label>
                    <input type="text" name="m_text" id="m_text" value={formData.m_text} onChange={handleFormData}/>
                    <input type="submit" value="Send" />
                </form>
            : 
                <p>Sorry, you will need to log in first to do that.</p>
            }
            
        </div>
    )
}

export default ParkForm