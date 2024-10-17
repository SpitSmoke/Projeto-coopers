import Todo from './Containers/Todo'
import TodoListTittle from './Containers/TodoListTittle'
import Hero from './Templates/Hero'
import GlobalStyles from './globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <TodoListTittle />
      <Todo />
    </>
  )
}

export default App
