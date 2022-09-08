import style from "../css/Btn.module.css"

export default function Btn({ children, mod }) {
  return <button className={`${style.btn} ${style[mod]}`}>{children}</button>
}
