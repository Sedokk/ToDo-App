import { useEffect, useState } from "react"
import Form from "./components/Form"
import Btns from "./components/Btns"
import TodoList from "./components/TodoList"
import "./App.css"

export default function App() {
  const [list, setList] = useState([])

  function addTodo(text) {
    const todo = {
      text,
      done: false,
      id: new Date().getTime(),
    }
    setList((prev) => {
      return [...prev, todo]
    })
  }
  function clearList() {
    setList([])
  }
  function clearDones() {
    setList((prev) => {
      const newArr = prev.filter((e) => !e.done)
      return newArr
    })
  }
  return (
    <div className='App'>
      <h1 className='title'>Todo App</h1>
      <Form addTodo={addTodo} />
      <Btns clearList={clearList} clearDones={clearDones} />
      <TodoList list={list} setList={setList} />
    </div>
  )
}
