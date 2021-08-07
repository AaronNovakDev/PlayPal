import React from 'react'
import Park from './Park'
import { useGlobalState } from '../utils/stateContext'

const Parks =()=>{
    const {store} = useGlobalState()
    const {parkList} = store
    console.log(parkList)
    return(
        <div>
            <h3>Parks</h3>
            {parkList.map((park, index)=>
                <Park key={park.id} park={park}/>
            )}
        </div>
    )
}

export default Parks