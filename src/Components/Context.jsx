import { createContext,useState } from "react";
// import {v4 as idgen } from "uuid"
export const TaskContext = createContext();

const CustomProvider = ({children})=>{

    const [todos, settodos] = useState([])
    function add(value){
        settodos([
            ...todos,{
                id:Date.now(),
                name:value,
                complete:false,
                edits:false
            },
        ]);
        console.log(todos)
    }
    function del(id){
        console.log("hi");
        settodos(todos.filter((ele)=> ele.id !== id));
    }
    function edit(){
        console.log("hell");
    }
    
    function iscomp(id,val){
        console.log(val);
        settodos(todos.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t )));
    }
    function update(id){
        
        settodos(todos.map((ele) => (ele.id === id ? { ...ele, edits: true } : ele)));

    }

    function updates(val,id){
        settodos(todos.map((ele) => (ele.id === id ? { ...ele, name: val,edits:false } : ele)));
        console.log(val,"--- ",id);
        console.log(todos,"acssac")
    }


    return(
    
        <TaskContext.Provider value={{todos, add,del,iscomp,edit,update,updates}}>
            {children}
        </TaskContext.Provider>
    )


}
export default CustomProvider