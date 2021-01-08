import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
 const Form=({input,setInput,todos,setTodos})=> {
     const onchangeHandler=(e)=>{
        
            setInput(e.target.value);
     }
     const submitHandler=(e)=>{
           console.log("now",input);
           if(input!=''){
              
            e.preventDefault();
            
            setTodos([...todos,{text:input,completed:false,id:Math.random()}]);
            setInput("");}
            else{ alert("input field is empty");}
     }
    return (
        <div>
            <TextField
                value={input}
                id="filled-secondary"
                label="enter element"
                variant="filled"
                color="secondary"
                size="small"
                font-color="white"
                onChange={onchangeHandler}
            />
           
            <Button  onClick={submitHandler} variant="outlined" size="large" color="primary">Add</Button>


        </div>
    )
}
export default Form; 
// <input value={input} placeholder="enter element" onChange={onchangeHandler}/>