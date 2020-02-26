import React, { useState } from "react"; 

const TeamForm = props => {
//set State
const [teamMate, setTeamMate] = useState({
    firstName:''
})

//onChange handler 
const handleChanges = e => {
    setTeamMate({firstName: e.target.value})
}

    return(    
        <form>
            <label htmlFor = "firstName"> First Name</label>
            <input id = "firstName" type = "text" onChange = {handleChanges}/>
        </form>
    )
}

export default TeamForm;