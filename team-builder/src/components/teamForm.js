import React, { useState } from "react"; 

const TeamForm = props => {
//set State
const [teamMate, setTeamMate] = useState({
    id: Number,
    firstName:'',
    lastName:'', 
    age: Number,
    weight: Number, 
    height: Number,
    job_D: ""
    
    }
)

//onChange handler 
const handleChanges = e => {
    setTeamMate({firstName: e.target.value})
}

    return(    
        <form>
            <label htmlFor = "firstName"> first name </label>
            <input id = "firstName" type = "text" onChange = {handleChanges}/>
            <br/>
            <label htmFor = "lastName">last name </label>
            <input id = "lastName" type = "text" onChange = {handleChanges}/>
            <br/>
            <label htmFor = "age">age </label>
            <input id = "age" type = "number" onChange = {handleChanges}/>
            <br/>
            <label htmFor = "weight">weight </label>
            <input id = "weight" type = "number" onChange = {handleChanges}/>
            <br/>
            <label htmFor = "height">height </label>
            <input id = "height" type = "number" onChange = {handleChanges}/>
            <br/>
            <label htmFor = "job_D">Job Description </label>
            <input id = "job_D" type = "text" onChange = {handleChanges}/>
            <br/>

            <button type = "Submit"> Add TeamMate </button>
        </form>
    )
}

export default TeamForm;