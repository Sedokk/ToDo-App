import { useEffect, useState } from "react"
import style from "../css/Form.module.css"

export default function Form({ addTodo }) {
  const [value, setValue] = useState("")

  function inputHandler(ev) {
    setValue(ev.target.value)
    localStorage.setItem("input", ev.target.value)
  }

  function setLoadValue() {
    if (!localStorage.getItem("input")) return
    setValue(localStorage.getItem("input"))
  }

  useEffect(() => {
    setLoadValue()
  }, [])

  return (
    <form
      className={style.form}
      onSubmit={(ev) => {
        ev.preventDefault()
        if (!value) return
        addTodo(value)
        setValue("")
        localStorage.removeItem("input")
      }}
    >
      <input
        type='text'
        className={style.input}
        placeholder='Enter new ToDo'
        value={value}
        onChange={inputHandler}
      />
      <button type='submit' className={style.btn}>
        Submit
      </button>
    </form>
  )
}
