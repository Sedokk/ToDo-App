import { useEffect, useState } from "react"
import Form from "./components/Form"
import Btns from "./components/Btns"
import TodoList from "./components/TodoList"
import "./App.css"

export default function App() {
  const [list, setList] = useState([])

  function addTodo(ev, text) {
    ev.preventDefault()
    setList((prev) => {
      return [...prev, text]
    })
  }
  return (
    <div className='App'>
      <h1 className='title'>Todo App</h1>
      <Form addTodo={addTodo} />
      <Btns />
      <TodoList list={list} />
    </div>
  )
}
