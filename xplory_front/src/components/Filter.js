import React from 'react'

const Filter = ()=>{
    return(
        <div className="filter">
            <p>This is the filter page , please enter what you would like to filter through</p>
            <p>
                <ul>
                  <li> Water - Potted/Unpotted</li>
                  <li> Pet freiendly</li>
                  <li>Shelter</li>
                  <li>Power</li>
                  <li>Lighting</li>
                  <li>Cooking facilities - Gas or Electric</li>
                  <li>Toilet</li>
                  <li>Shower - Hot or Cold</li>
                  <li>Parking </li>
                  <li>Wheelchair Access </li>
                  <li> Fenced off park for kids</li>
                  <li>Beach access</li>
                  <li>Events - DnD meetups</li>
                 </ul>
            </p>
        </div>
    )
}

export default Filter



//JUST A PLACEHOLDER FOR THIS PAGE. JAIRO SAID THIS ON TRELLO my guess is that you're not handling the filtered array as state. My approach would be to add a filterArray method when you set the state. Let me know how it goes