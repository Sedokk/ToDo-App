import style from "./Btn.module.css"

function Btn(props) {
  return <button className={style.btn}>{props.children}</button>
}

export default Btn
