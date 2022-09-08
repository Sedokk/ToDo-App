import { useState } from "react"
import style from "../css/Form.module.css"

export default function Form({ addTodo }) {
  const [value, setValue] = useState("")

  return (
    <form
      className={style.form}
      onSubmit={(ev) => {
        addTodo(ev, value)
      }}
    >
      <input
        type='text'
        className={style.input}
        placeholder='Enter new ToDo'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <button type='submit' className={style.btn}>
        Submit
      </button>
    </form>
  )
}
