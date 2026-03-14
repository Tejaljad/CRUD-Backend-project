import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard(){

  const [tasks,setTasks] = useState([])
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  const token = localStorage.getItem("token")

  const createTask = async()=>{

    try{

      await API.post(
        "/tasks",
        {title,description},
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )

      setTitle("")
      setDescription("")

      fetchTasks()

    }catch(err){
      console.log(err)
    }

  }

  const fetchTasks = async()=>{

    try{

      const res = await API.get("/tasks",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      setTasks(res.data)

    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{

    fetchTasks()

  },[])

  return(

    <div>

      <h2>Dashboard</h2>

      <h3>Create Task</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />

      <br/>

      <input
        placeholder="Description"
        value={description}
        onChange={e=>setDescription(e.target.value)}
      />

      <br/>

      <button onClick={createTask}>
        Add Task
      </button>

      <h3>All Tasks</h3>

      {tasks.map(task=>(
        <div key={task.id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </div>
      ))}

    </div>

  )

}

export default Dashboard