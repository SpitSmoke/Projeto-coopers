import TitleBox, { TittleModule, TodoListImage } from './todolisttittle'
import BGTD from '../../Images/ImagesTodoList/BGCardTodoList.svg'
import TodolistT from '../../Components/TodolistT'

const TodoListTittle = () => {
  return (
    <TitleBox>
      <TittleModule>
        <TodolistT />
      </TittleModule>
      <TodoListImage src={BGTD} />
    </TitleBox>
  )
}
export default TodoListTittle
