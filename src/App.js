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
      const newList = [...prev, todo]
      localStorage.setItem("list", JSON.stringify(newList))
      return newList
    })
  }
  function clearList() {
    setList([])
    localStorage.removeItem("list")
  }
  function clearDones() {
    setList((prev) => {
      const newList = prev.filter((e) => !e.done)
      localStorage.setItem("list", JSON.stringify(newList))
      return newList
    })
  }
  function setLoadList() {
    const storageList = localStorage.getItem("list")
    if (!storageList) return
    setList(JSON.parse(storageList))
  }

  useEffect(() => {
    setLoadList()
  }, [])
  return (
    <div className='App'>
      <h1 className='title'>Todo App</h1>
      <Form addTodo={addTodo} />
      <Btns clearList={clearList} clearDones={clearDones} />
      {list.length === 0 && <h1>There is no Todos...</h1>}
      <TodoList list={list} setList={setList} />
    </div>
  )
}
