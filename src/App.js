import './App.css';
import React, {useState} from 'react';

function App() {
 const [tasks, setTasks] = useState([
   {name: "Feed Ghost", priority: "high"},
   {name: "Play Animal Crossing", priority: "low"},
   {name: "Complete Homework", priority: "high"}
 ])
 const [newTask, setNewTask] = useState("")

 const prioritiseTask = (index) => {
   tasks[index].isHigh = true
   const copyOfTasks = [...tasks]
   setTasks(copyOfTasks)
 }

 const taskNodes = tasks.map( (task, index) => {
   return(
     <li key={index} className={task.isHigh ? "high" : "not-high"}>
       <span>{task.name}</span>
       {task.isHigh ? <span className="high">&#10071; High Priority</span>:
       <button onClick={ () => {prioritiseTask(index)} }
       >Make High Priority</button> }
     </li>
   )
 })

 const handleTaskInput = (event) => {
   setNewTask(event.target.value)
 }

 const saveNewTask = (event) => {
   event.preventDefault()
   const newTaskItem = {name: newTask, isHigh: false}
   const copyOfTasks = [...tasks, newTaskItem]
   setTasks(copyOfTasks)
   setNewTask("")
 }

 return (
   <div className="App">
     <h1>Rachel's To-Do List &#128221;</h1>
     <hr />

     <ul>
       {taskNodes}
     </ul>

     <form onSubmit={saveNewTask}>
       <label htmlFor="new-task">Add a new task</label>
       <input type="text" id="new-task" value={newTask} onChange={handleTaskInput}/>
       <input type="submit" value="Save New Task" />
     </form>
   </div>
 )
}

export default App;
