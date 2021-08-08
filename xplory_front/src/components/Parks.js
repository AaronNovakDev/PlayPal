import React from 'react'
import Park from './Park'
import { useGlobalState } from '../utils/stateContext'

const Parks =()=>{
    const {store} = useGlobalState()
    const {parkList} = store
    console.log(parkList)
    return(
        <div>
            <h1>Your Parks</h1>
            {parkList.map((park, index)=>
                <Park key={park.id} park={park}/>
            )}
        </div>
    )
}

export default Parks