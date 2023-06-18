import React, { useContext, useState } from 'react'
import { TaskContext } from './Context'
import "./list.css"
import { BsFillXCircleFill, BsFillPencilFill } from "react-icons/bs";


function Lists() {
    const { todos, del, iscomp, update,updates,bls } = useContext(TaskContext)
    // const [edit, setedit] = useState(false)
    const [editval, seteditval] = useState("")
    

    return (
        <div style={{ height: '100%', padding: '20px' }}>
            <ul style={{ width: '500px', border: 'solid', height: '50px', height: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {
                    todos.map((ele) => {
                        return (
                            <li style={{
                                display: 'flex', height: '80px', alignItems: 'center', justifyContent: 'space-around', gap: '10px', backgroundColor: 'blueviolet', color: "white", paddingLeft: '10px', fontSize: '2rem'

                            }} >
                                
                                <input type="checkbox" onChange={(e) => iscomp(ele.id)} style={{
                                    height: '20px', width: '20px'
                                }} />
                                
                                {
                                    !ele.edits ? 
                                    <p className={ele.complete ? "checked" : ""} style={{ flex: '1' }}>{ele.name}</p>
                                    :
                                    <div>

                                       <input type='text'  onChange={(e)=>{
                                        seteditval(e.target.value)
                                       }}  />
                                        <button onClick={()=>{
                                            updates(editval,ele.id)
                                        }}>update</button>
                                    </div>
                                }
                                

                                <button style={{
                                    fontSize: '2.5rem', borderRadius: '20px', width: "50px", height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }} onClick={()=>{
                                    update(ele.id)
                                }} ><BsFillPencilFill /></button>
                                <button onClick={() => del(ele.id)}
                                    style={{
                                        marginRight: '20px', fontSize: '2.5rem', borderRadius: '20px', width: "50px", height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'

                                    }}
                                > <BsFillXCircleFill /> </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Lists