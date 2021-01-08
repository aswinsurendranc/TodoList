import React from 'react'
import Todolist from './todolist';

 const List=({todos,setTodos})=> {
     
    return (
        <div>
           <ul>
             {todos.map(item=>(
                //  console.log(item);
                 <Todolist todos={todos} setTodos={setTodos} todo={item}text={item.text} id={item.id}/>
             ))}
           </ul>
        </div>
    )
}
export default List;