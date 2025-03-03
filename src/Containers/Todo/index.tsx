import { useState } from 'react'
import ListOne from '../../Components/ListOne'
import ListTwo from '../../Components/ListTwo'
import ContainerTodo from './TodoStyle'

const Todo = () => {
  const [completedTasks, setCompletedTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([])

  const handleCompleteTask = (task: {
    id: number
    text: string
    completed: boolean
  }) => {
    setCompletedTasks([...completedTasks, task])
  }

  const clearTasks = () => {
    setCompletedTasks([])
  }

  return (
    <ContainerTodo>
      <ListOne onCompleteTask={handleCompleteTask} />
      <ListTwo completedTasks={completedTasks} clearTasks={clearTasks} />
    </ContainerTodo>
  )
}

export default Todo
