import ListTwoContainer, {
  FirstLine,
  Green,
  LiDone,
  ListTwoTittle,
  SecondLine,
  UlDone
} from './ListTwoStyles'

const ListTwo = ({
  completedTasks
}: {
  completedTasks: { id: number; text: string; completed: boolean }[]
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
    </ListTwoContainer>
  )
}
export default ListTwo
