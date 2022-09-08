import style from "../css/Btn.module.css"

export default function Btn({ children, mod, onClick }) {
  return (
    <button className={`${style.btn} ${style[mod]}`} onClick={onClick}>
      {children}
    </button>
  )
}
