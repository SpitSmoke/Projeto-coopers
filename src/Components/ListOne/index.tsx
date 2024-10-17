import { useState } from 'react'
import ContainerListOne, {
  AddTaskButton,
  DeleteTaskButton,
  EditTaskButton,
  FirstLine,
  InputCheckbox,
  InputTextAdd,
  ListOneTittle,
  LiToDo,
  Orange,
  Paragraph,
  SecondLine,
  SubTittle,
  TaskContainer,
  TaskText,
  UlToDo
} from './ListOneStyle'

type ListOneProps = {
  onCompleteTask: (task: {
    id: number
    text: string
    completed: boolean
  }) => void
}

const ListOne = ({ onCompleteTask }: ListOneProps) => {
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([])
  const [isEditing, setIsEditing] = useState(false)
  const [editTasks, setEditTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([])
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )

    const taskToComplete = tasks.find((task) => task.id === id)
    if (taskToComplete && !taskToComplete.completed) {
      onCompleteTask({ ...taskToComplete, completed: true })
    }
  }

  const addTask = () => {
    if (newTask.trim()) {
      const newId = Date.now()
      setTasks([...tasks, { id: newId, text: newTask, completed: false }])
      setEditTasks([
        ...editTasks,
        { id: newId, text: newTask, completed: false }
      ])
      setNewTask('')
      setError('')
    } else {
      setError('Task cannot be empty.')

      setTimeout(() => {
        setError('')
      }, 3000)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask()
      setIsFocused(false)
    }
  }

  return (
    <ContainerListOne>
      <Orange />
      <ListOneTittle>To-do</ListOneTittle>
      <SubTittle>
        <FirstLine>Take a breath.</FirstLine>
        <SecondLine>Start doing.</SecondLine>
      </SubTittle>

      <UlToDo>
        {tasks.map((task) => (
          <LiToDo key={task.id}>
            <TaskContainer>
              <InputCheckbox
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
              />
              {isEditing ? (
                <input
                  type="text"
                  value={editTasks.find((t) => t.id === task.id)?.text || ''}
                  onChange={(e) =>
                    setEditTasks(
                      editTasks.map((task) =>
                        task.id === task.id
                          ? { ...task, text: e.target.value }
                          : task
                      )
                    )
                  }
                />
              ) : (
                <TaskText completed={task.completed}>{task.text}</TaskText>
              )}
            </TaskContainer>
            <DeleteTaskButton
              onClick={() =>
                setTasks(tasks.filter((task) => task.id !== task.id))
              }
            >
              X
            </DeleteTaskButton>
          </LiToDo>
        ))}
      </UlToDo>

      <InputTextAdd
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder={isFocused ? '' : 'Add a new task'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (!newTask.trim()) {
            setIsFocused(false)
          }
        }}
        onKeyDown={handleKeyDown}
      />

      <AddTaskButton onClick={addTask}>Add Task</AddTaskButton>

      {error && <Paragraph style={{ color: 'red' }}>{error}</Paragraph>}

      <EditTaskButton onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save Changes' : 'Edit Tasks'}
      </EditTaskButton>
    </ContainerListOne>
  )
}

export default ListOne
