import React, { useState } from 'react'
import { useContext } from 'react'
import { TaskContext } from './Context'
import Lists from './List'

function Task() {
   const [inpval, setinpval] = useState("")
    const {add} = useContext(TaskContext)
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
        <div style={{display:'flex',gap:'10px'}}>
        <input type="text" value={inpval} onChange={(e)=>setinpval(e.target.value)} 
        style={{width:'500px',height:'40px',fontSize:'1.5rem',paddingLeft:'10px'
        ,borderRadius:'20px'
    }} />
        <button onClick={()=>{
            add(inpval)
            setinpval("")
        }} style={{ width:'40px',height:'40px',borderRadius:'10px',fontSize:'1.5rem'}}>+</button>
        </div>
        <Lists/>
    </div>
  )
}

export default Task