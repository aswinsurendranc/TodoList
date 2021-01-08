import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
 const Todolist=({text,id,todos,setTodos,todo})=>{
   const deleteHandler=()=>{
    console.log(todos);
     setTodos(todos.filter((el)=>el.id!==todo.id));
    
}
    return (
        <div>
            
            <li>{text}<Button startIcon={<DeleteIcon />} variant="contained" color="default" onClick={deleteHandler}>
Delete
</Button></li>
            
        </div>
    )
}
export default Todolist;
{/* <button onClick={deleteHandler}>delete</button> */}