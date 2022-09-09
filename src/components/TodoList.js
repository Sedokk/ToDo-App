import Todo from "./Todo"
import style from "../css/TodoList.module.css"
export default function TodoList({ list, setList }) {
  return (
    <div className={style.wrapper}>
      {list.map((e) => (
        <Todo todoObj={e} key={e.id} setList={setList} />
      ))}
    </div>
  )
}
