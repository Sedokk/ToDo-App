import Btn from "./Btn"
import style from "./Btns.module.css"

function Btns() {
  return (
    <div className={style.wrapper}>
      <Btn>Hello</Btn>
      <Btn>Hello</Btn>
    </div>
  )
}

export default Btns
