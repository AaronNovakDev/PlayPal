import React from 'react'
import {Link} from 'react-router-dom'
import { deletePark, changePark } from '../assets/services/parkServices'

import { useGlobalState } from '../utils/stateContext'

const Park =({park, history})=>{
    const {dispatch} = useGlobalState()

    function removePark(){
        deletePark(park.id)
        .then(()=>{
            dispatch({
                type: "deletePark",
                data: park.id 
            })
        })
        .catch(error => {console.log(error)})
    }

    return(
        <div>
            {park? 
            <>
                <div className="parks">
                    <Link to={`/parks/${park.id}`} ><h4>{park.title}</h4></Link>
                    <h4>{park.description}</h4>
                    <Link to={'/parks'}><h3 onClick={removePark}>Delete</h3></Link>
                    <Link to={'/parks'}><h3 onClick={changePark}>Update</h3></Link>
                    <p>{park.username} {park.posted}</p>
                </div>
                
            </>
            :
                <>
                    <p>Sorry thats an invalid ID for a park</p>
                    <Link to="/home">Back to the home page</Link>
                </>
            }
        </div>
        
    )
}

export default Park