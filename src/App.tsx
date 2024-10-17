import TodoListTittle from './Containers/TodoListTittle'
import Hero from './Templates/Hero'
import ImagemAsideTemplate from './Templates/Hero/ImageAside'
import TodoTemplate from './Templates/Todo'
import GlobalStyles from './globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <TodoListTittle />
      <TodoTemplate />
      <ImagemAsideTemplate />
    </>
  )
}

export default App
