import { Task } from "../../interfaces/Task"

type Props = {
  taskList: Task[]
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      <div>Lista de tarefas</div>
      <ul>
        { taskList && taskList.map(item => (
          <div>
            {item.title} | {item.difficulty} | {new Date(item.id).toLocaleString()}
          </div>
        ))
        }
      </ul>
    </>
  )
}

export default TaskList