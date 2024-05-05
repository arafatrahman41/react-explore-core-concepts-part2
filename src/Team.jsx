import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    
    const handleAdd = () => {
        setTeam (team + 1);
    }
    const handleRemove = () => {
        setTeam (team - 1);
    }

    const teamStyle = {
        border: '2px solid skyblue', 
        margin: '15px 0 15px 0',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}