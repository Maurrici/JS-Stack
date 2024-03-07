import { useState } from 'react'
import './App.css'

// Interface
import { Task } from './interfaces/Task'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/Form/TaskForm'
import TaskList from './components/List/TaskList'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div>
      <Header />
      <div className='main'>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa' taskList={tasks} setTaskList={setTasks} />
        </div>

        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={tasks} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
