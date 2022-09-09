import Btn from "./Btn"
import style from "../css/Todo.module.css"
import { useEffect, useState } from "react"

export default function Todo({ todoObj, setList }) {
  const [isDone, setIsDone] = useState(false)
  function done(ev) {
    const id = Number(ev.target.closest("div").dataset.id)
    setList((prev) => {
      const newList = Object.assign([], prev)
      const elem = newList.find((e) => e.id === id)
      elem.done = !elem.done
      localStorage.setItem("list", JSON.stringify(newList))
      return newList
    })
    setIsDone(!isDone)
  }
  function remove(ev) {
    const id = Number(ev.target.closest("div").dataset.id)
    setList((prev) => {
      const newList = Object.assign([], prev)
      const ind = newList.findIndex((e) => e.id === id)
      newList.splice(ind, 1)
      localStorage.setItem("list", JSON.stringify(newList))
      return newList
    })
  }
  useEffect(() => {
    setIsDone(todoObj.done)
  }, [])
  return (
    <div
      className={isDone ? style.wrapperDone : style.wrapper}
      data-id={todoObj.id}
    >
      <p className={style.text}>{todoObj.text}</p>
      <Btn mod='aquamarine' onClick={done}>
        <svg
          enableBackground='new 0 0 91 91'
          height='30'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 91 91'
          width='30'
          xmlSpace='preserve'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <g>
            <path
              fill='black'
              d='M69.116,40.925H53.119l-5.529-16.83c-0.229-0.697-0.881-1.168-1.615-1.168s-1.385,0.471-1.615,1.168l-5.529,16.83H22.834   c-0.739,0-1.395,0.477-1.619,1.182s0.031,1.475,0.633,1.902l12.943,9.213l-5.213,15.869c-0.229,0.699,0.016,1.463,0.607,1.9   c0.592,0.434,1.395,0.441,1.994,0.016l13.795-9.822l13.797,9.822c0.295,0.211,0.641,0.314,0.986,0.314   c0.354,0,0.708-0.111,1.007-0.33c0.592-0.438,0.837-1.201,0.608-1.9L57.16,53.222l12.941-9.213   c0.603-0.428,0.859-1.197,0.634-1.902C70.511,41.401,69.855,40.925,69.116,40.925z M54.168,51.179   c-0.605,0.432-0.861,1.207-0.629,1.916l3.988,12.141l-10.566-7.521c-0.295-0.211-0.641-0.316-0.986-0.316   c-0.345,0-0.689,0.105-0.986,0.316l-10.565,7.521l3.989-12.141c0.232-0.709-0.023-1.484-0.63-1.916l-9.629-6.855h11.908   c0.735,0,1.386-0.471,1.615-1.168l4.298-13.084l4.299,13.084c0.229,0.697,0.881,1.168,1.615,1.168h11.908L54.168,51.179z'
            />
          </g>
        </svg>
      </Btn>
      <Btn mod='aquamarine' onClick={remove}>
        <svg
          height='30px'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 91 91'
          width='30'
          xmlSpace='preserve'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <g>
            <path
              fill='black'
              d='M67.305,36.442v-8.055c0-0.939-0.762-1.701-1.7-1.701H54.342v-5.524c0-0.938-0.761-1.7-1.699-1.7h-12.75   c-0.939,0-1.701,0.762-1.701,1.7v5.524H26.93c-0.939,0-1.7,0.762-1.7,1.701v8.055c0,0.938,0.761,1.699,1.7,1.699h0.488v34.021   c0,0.938,0.761,1.7,1.699,1.7h29.481c3.595,0,6.52-2.924,6.52-6.518V38.142h0.486C66.543,38.142,67.305,37.381,67.305,36.442z    M41.592,22.862h9.35v3.824h-9.35V22.862z M61.719,67.345c0,1.719-1.4,3.117-3.12,3.117h-27.78v-32.32l30.9,0.002V67.345z    M63.904,34.742H28.629v-4.655h11.264h12.75h11.262V34.742z'
            />
            <rect height='19.975' width='3.4' x='36.066' y='44.962' />
            <rect height='19.975' width='3.4' x='44.566' y='44.962' />
            <rect height='19.975' width='3.4' x='53.066' y='44.962' />
          </g>
        </svg>
      </Btn>
    </div>
  )
}
