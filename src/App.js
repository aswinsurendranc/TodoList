import React,{useState} from 'react';
import './App.css';
import Form from "./components/form.js";
import List from './components/list';
import Container from '@material-ui/core/Container';
function App() {
  let [input,setInput]=useState("");
  let [todos,setTodos]=useState([]);

  return (
    <div className="App">
      <Container fixed style={{ backgroundColor: 'grey', height: '100vh' }}>
     
            <header className="App-header">
            <h1>TODO LIST</h1>
            <Form todos={todos} setTodos={setTodos}input={input} setInput={setInput}/>
            <List todos={todos} setTodos={setTodos}/>
            </header>
        
      </Container>
    </div>
  );
}

export default App;
