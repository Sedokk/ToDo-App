import Form from "./components/Form"
import Btns from "./components/Btns"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Todo App</h1>
      <Form />
      <Btns />
      {/* <TodoList /> */}
    </div>
  )
}

export default App
