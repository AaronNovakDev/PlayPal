import React from 'react'
import Parks from './Parks'
import { useGlobalState } from '../utils/stateContext'

const Park =()=>{
    const {store} = useGlobalState()
    const {parkList} = store
    console.log(parkList)
    return(
        <div>
            <h3>Welcome to your parks!!</h3>
            {parkList.map((park, index)=>
                <Park key={park.id} message={park}/>
            )}
        </div>
    )
}

export default Park