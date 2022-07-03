import React,{useState} from 'react';
import {Todo} from './Components/model'
import './App.css';


const App: React.FC = () => {


const [todo, setTodo] = useState<string>('')
const[todos,setTodos]=useState<Todo[]>([])

// interface Todo{
//   todo:string;
//   setTodo: React.Dispatch<React.SetStateAction<string>>
// }

const handleAdd = ()=>{

  if(todo){
    setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
    setTodo('')
  }
}
console.log(todos)

  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      
      <div className="input">
        <input value={todo} type="text" onChange={(e)=>{
          setTodo(e.target.value)
        }} placeholder="🖊️ Add item..." />

        <i className="fas fa-plus" onClick={handleAdd}></i>

      </div>
      
      <div className="todos">
{
todos.map((t)=>{

  return(

        <div className="todo">
          <div className="left">
            <input value={t.todo} type="checkbox" name="" id="" />
            <p>
            </p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
        )
        })
}



      </div>
    </div>
  );
}

export default App;
