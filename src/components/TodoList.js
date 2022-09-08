import Todo from "./Todo"
import style from "../css/TodoList.module.css"
export default function TodoList({ list, setList }) {
  return (
    <div className={style.wrapper}>
      {list.map((e) => (
        <Todo text={e.text} key={e.id} data={e.id} setList={setList} />
      ))}
    </div>
  )
}
