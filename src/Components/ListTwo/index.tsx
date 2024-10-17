import ListTwoContainer, {
  ButtonDeletAll,
  FirstLine,
  Green,
  LiDone,
  ListTwoTittle,
  SecondLine,
  UlDone
} from './ListTwoStyles'

const ListTwo = ({
  completedTasks,
  clearTasks
}: {
  completedTasks: { id: number; text: string; completed: boolean }[]
  clearTasks: () => void
}) => {
  return (
    <ListTwoContainer>
      <Green />
      <ListTwoTittle>Done</ListTwoTittle>
      <FirstLine>Congratulions!</FirstLine>
      <SecondLine>You have done {completedTasks.length} tasks</SecondLine>

      <UlDone>
        {completedTasks.map((task) => (
          <LiDone key={task.id}>{task.text}</LiDone>
        ))}
      </UlDone>

      <ButtonDeletAll onClick={clearTasks}>Erase ALL</ButtonDeletAll>
    </ListTwoContainer>
  )
}

export default ListTwo
