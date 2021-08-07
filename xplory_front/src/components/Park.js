import React from 'react'
import {Link} from 'react-router-dom'
import { deletePark } from '../assets/services/parkServices'
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
                <div>
                    <Link to={`/parks/${park.id}`} ><h4>{park.text}</h4></Link>
                    <Link to={'/parks'}><h3 onClick={removePark}>X</h3></Link>
                    <p>{park.username} {park.posted}</p>
                </div>
                
            </>
            :
                <>
                    <p>Sorry thats an invalid ID for a park</p>
                    <Link to="/parks">Back to the home page</Link>
                </>
            }
        </div>
        
    )
}

export default Park