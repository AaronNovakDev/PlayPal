import React from 'react'

const Filter = ()=>{
    return(
        <div className="filter">
            <p>This is the filter page , please enter what you would like to filter through</p>
        </div>
    )
}

export default Filter

//Categoies to filter - > 
//Water - Potted/Unpotted
//Pet freiendly
//Shelter
//Power
//Lighting
//Cooking facilities - Gas or Electric
//Toilet
//Shower - Hot or Cold
//Parking 
//Wheelchair Access 
//Fenced off park for kids
//Beach access
//Events - DnD meetups

//JUST A PLACEHOLDER FOR THIS PAGE. JAIRO SAID THIS ON TRELLO my guess is that you're not handling the filtered array as state. My approach would be to add a filterArray method when you set the state. Let me know how it goes