import React from 'react'

const Greeting = ({timeOfDay}) => {
    if(timeOfDay==="morning" || timeOfDay==="Morning"){
        return(
            <h1>Good Morning</h1>
        )
    }else if(timeOfDay==="afternoon" || timeOfDay==="Afternoon"){
        return(
            <h1>Good Afternoon</h1>
        )
    }else{
        return(
            <h1></h1>
        )
    }
}

export default Greeting